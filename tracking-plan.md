# Ulpiano — Marketing Tracking Plan

**Versión:** 1.0.0
**Fecha:** 12 de abril de 2026
**Herramientas:** GA4 + Google Tag Manager (GTM-MBNWK2CW)
**Compliance:** RGPD / Consent Mode v2

---

## 1. Arquitectura de medición

```
┌─────────────────────────────────────────────────────────┐
│                    CAPA DE DATOS                         │
│  dataLayer.push() desde Next.js → GTM → GA4 + Pixels    │
└─────────────────┬───────────────────────────────────────┘
                  │
    ┌─────────────┼─────────────────────┐
    │             │                     │
    ▼             ▼                     ▼
┌────────┐  ┌──────────┐  ┌─────────────────────┐
│  GA4   │  │ Google   │  │  LinkedIn Insight    │
│        │  │ Ads      │  │  (futuro)            │
└────────┘  └──────────┘  └─────────────────────┘
```

**Principio rector:** dataLayer-first. Toda la información de negocio se inyecta en el dataLayer antes de que GTM la procese. Ningún tag lee directamente del DOM — todo pasa por variables estructuradas.

---

## 2. Consent Mode v2 (RGPD)

Estado por defecto **antes** del consentimiento:

| Señal | Estado por defecto | Tras consentimiento |
|-------|-------------------|---------------------|
| `analytics_storage` | `denied` | `granted` |
| `ad_storage` | `denied` | `granted` |
| `ad_user_data` | `denied` | `granted` |
| `ad_personalization` | `denied` | `granted` |
| `functionality_storage` | `granted` | `granted` |
| `security_storage` | `granted` | `granted` |

> GTM envía pings sin cookies cuando el consentimiento está denegado (modelado de conversiones), cumpliendo con la DMA y el RGPD.

---

## 3. Dimensiones personalizadas

### Content Group (ámbito: evento)

Clasificación automática por URL:

| URL Pattern | Content Group | Propósito |
|-------------|--------------|-----------|
| `/` | `home` | Rendimiento homepage |
| `/soluciones/*` | `soluciones` | Interés por producto |
| `/pensado-para/*` | `segmentos` | Identificación de ICP |
| `/modelos/*` | `modelos` | Contenido educativo/SEO |
| `/demo` | `conversion` | Intención alta |
| `/contacto` | `conversion` | Intención alta |
| `/precios` | `conversion` | Intención alta |
| `/login` | `acceso` | Usuarios existentes |
| `/recursos/*` | `lead_magnets` | Captura de leads |
| `/legal/*` | `legal` | Compliance |

### Page Type (ámbito: evento)

| URL Pattern | Page Type |
|-------------|-----------|
| `/` | `homepage` |
| `/soluciones/*` | `feature_page` |
| `/pensado-para/*` | `segment_page` |
| `/modelos/*` | `resource_page` |
| `/demo` | `lead_capture` |
| `/contacto` | `lead_capture` |
| `/precios` | `pricing` |
| `/login` | `login` |
| `/recursos/*` | `lead_capture` |
| `/legal/*` | `legal` |

---

## 4. Taxonomía de eventos

### 4.1 Eventos del marketing site

| Evento | Descripción | Propiedades | Trigger |
|--------|-------------|-------------|---------|
| `page_view` | Página cargada (enhanced) | `page_title`, `page_path`, `content_group`, `page_type` | Todas las páginas |
| `scroll_depth` | Scroll a umbral | `percent_scrolled`, `page_path`, `content_group` | 25%, 50%, 75%, 100% |
| `cta_clicked` | Click en CTA | `button_text`, `cta_location`, `destination_url`, `page_path` | dataLayer push |
| `navigation_clicked` | Click en navegación | `menu_item`, `menu_section` | dataLayer push |
| `outbound_link_clicked` | Click a sitio externo | `link_url`, `link_text`, `page_path` | Links salientes |

### 4.2 Eventos de formularios

| Evento | Descripción | Propiedades | Trigger |
|--------|-------------|-------------|---------|
| `demo_form_started` | Primer campo del formulario de demo | `page_path` | dataLayer push (focus) |
| `demo_form_submitted` | Demo solicitada con éxito | `empresa`, `cargo`, `expedientes_ano`, `page_path` | dataLayer push (submit) |
| `contact_form_started` | Primer campo del formulario de contacto | `page_path` | dataLayer push (focus) |
| `contact_form_submitted` | Contacto enviado con éxito | `asunto`, `page_path` | dataLayer push (submit) |
| `lead_magnet_download` | Lead magnet descargado | `lead_magnet_name`, `lead_source`, `page_path` | dataLayer push (submit) |
| `form_error` | Error de validación | `form_name`, `error_type`, `field_name` | dataLayer push |

### 4.3 Eventos de conversión (Key Events en GA4)

| Evento | Descripción | Propiedades | Valor | Counting |
|--------|-------------|-------------|-------|----------|
| `generate_lead` | Conversión principal | `lead_type` (demo/contact/lead_magnet), `currency`, `value` | 150€ (demo) / 50€ (contact) / 25€ (lead_magnet) | Una por sesión |
| `pricing_page_viewed` | Interés en precios | `source`, `referrer` | — | Una por sesión |

### 4.4 Eventos de engagement

| Evento | Descripción | Propiedades | Trigger |
|--------|-------------|-------------|---------|
| `engaged_session_30s` | Sesión cualificada (30s+) | `page_path`, `content_group` | Timer 30s |
| `solution_explored` | Visita a página de solución | `solution_name` | PV /soluciones/* |
| `segment_explored` | Visita a página de segmento | `segment_name` | PV /pensado-para/* |
| `modelo_explored` | Visita a página de modelo | `modelo_type` | PV /modelos/* |
| `login_portal_clicked` | Click en acceso al portal | `portal_type` | dataLayer push |

---

## 5. Funnels de conversión

### Funnel 1: Solicitud de Demo (primario)

```
page_view (cualquiera)
    │
    ▼
cta_clicked (destino: /demo)
    │
    ▼
page_view (/demo)
    │
    ▼
demo_form_started
    │
    ▼
demo_form_submitted
    │
    ▼
generate_lead (lead_type: demo, value: 150)
```

### Funnel 2: Formulario de Contacto (secundario)

```
page_view (cualquiera)
    │
    ▼
cta_clicked (destino: /contacto)
    │
    ▼
page_view (/contacto)
    │
    ▼
contact_form_started
    │
    ▼
contact_form_submitted
    │
    ▼
generate_lead (lead_type: contact, value: 50)
```

### Funnel 3: Lead Magnet Download

```
page_view (cualquiera / LinkedIn / email)
    │
    ▼
page_view (/recursos/checklist-expediente-sucesorio)
    │
    ▼
lead_magnet_download (lead_magnet_name: checklist-sucesorio-cataluna)
    │
    ▼
generate_lead (lead_type: lead_magnet, value: 25)
    │
    ▼
[Email nurture sequence: 4 emails en 10 días]
    │
    ▼
demo_form_submitted (conversión secundaria)
```

### Funnel 4: Content Engagement → Conversión

```
page_view (solución / segmento / modelo)
    │
    ▼
scroll_depth (50%+)
    │
    ▼
cta_clicked
    │
    ▼
page_view (/demo o /contacto)
```

---

## 6. Estrategia de UTMs

### Convención de nomenclatura

Formato: **minúsculas, guiones bajos, sin espacios, sin caracteres especiales.**

### Mapeo por canal

| Canal | `utm_source` | `utm_medium` | `utm_campaign` | `utm_content` |
|-------|-------------|-------------|----------------|---------------|
| Google Ads (Search) | `google` | `cpc` | `{tipo}_{tema}` | `{grupo_anuncios}` |
| Google Ads (Display) | `google` | `display` | `{campaña}` | `{creatividad}` |
| LinkedIn Ads | `linkedin` | `cpc` | `{campaña}_{segmento}` | `{creatividad}` |
| Newsletter | `newsletter` | `email` | `{aaaa_mm_dd}_{tema}` | `{seccion}` |
| Outbound sales | `outbound` | `email` | `{secuencia}_{paso}` | `{variante}` |
| LinkedIn orgánico | `linkedin` | `social` | `{tipo_contenido}` | `{post_id}` |
| Twitter/X orgánico | `twitter` | `social` | `{tipo_contenido}` | `{post_id}` |
| Partnerships | `{nombre_partner}` | `referral` | `{programa}` | — |
| Directorios legales | `{nombre_directorio}` | `listing` | `{categoria}` | — |
| Firma de email | `firma_email` | `email` | `equipo_{departamento}` | — |
| QR físico (eventos) | `evento_{nombre}` | `qr` | `{fecha}` | `{ubicacion}` |

### Ejemplos concretos

```
https://ulpiano.es/demo?utm_source=linkedin&utm_medium=cpc&utm_campaign=despachos_girona&utm_content=caso_uso_isd

https://ulpiano.es/soluciones/fiscalidad-sucesoria?utm_source=newsletter&utm_medium=email&utm_campaign=2026_04_12_novedades_isd&utm_content=cta_hero

https://ulpiano.es/?utm_source=colegio_abogados_girona&utm_medium=referral&utm_campaign=partnership_q2_2026
```

---

## 7. Key Events (Conversiones en GA4)

Marcar como Key Events en GA4 Admin:

| Key Event | Evento GA4 | Valor | Método de conteo |
|-----------|-----------|-------|-----------------|
| Solicitud de demo | `generate_lead` (lead_type=demo) | 150€ | Una por sesión |
| Formulario de contacto | `generate_lead` (lead_type=contact) | 50€ | Una por sesión |
| Vista de precios | `pricing_page_viewed` | — | Una por sesión |
| Sesión cualificada | `engaged_session_30s` | — | Una por sesión |

### Valores de conversión

Los valores asignados permiten optimización de pujas en Google Ads por ROAS, basados en:
- **Demo → cliente**: ratio estimado 15%, LTV medio 1.788€/año → valor demo ≈ 150€ (ajustar con datos reales)
- **Contacto → demo**: ratio estimado 30% → valor contacto ≈ 50€

---

## 8. Audiences (Públicos en GA4)

| Audiencia | Condición | Uso |
|-----------|-----------|-----|
| Demo Requesters | `generate_lead` con `lead_type=demo` | Exclusión en ads, nurture |
| High-Intent Visitors | Visitaron `/precios` O `/demo` sin convertir | Retargeting prioritario |
| Solution Explorers | ≥2 páginas de `/soluciones/*` en una sesión | Retargeting de producto |
| Segment Match: Despachos | Visitaron `/pensado-para/despachos` | Personalización de ads |
| Segment Match: Asesorías | Visitaron `/pensado-para/asesorias` | Personalización de ads |
| Segment Match: Notarías | Visitaron `/pensado-para/notarias` | Personalización de ads |
| Content Engaged | `scroll_depth` ≥75% en cualquier página | Lookalike audiences |
| Returning Non-Converters | ≥3 sesiones, sin `generate_lead` | Retargeting agresivo |

---

## 9. Implementación — dataLayer pushes necesarios en Next.js

### 9.1 Enriquecimiento de página (en layout o componente global)

```javascript
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'page_data_ready',
  'content_group': '<valor_calculado>',
  'page_type': '<valor_calculado>'
});
```

### 9.2 CTA clicked (en componente ButtonPrimary)

```javascript
dataLayer.push({
  'event': 'cta_clicked',
  'button_text': 'Solicita tu demo gratuita',
  'cta_location': 'hero',
  'destination_url': '/demo'
});
```

### 9.3 Formulario de demo (en DemoClient.tsx)

```javascript
// Al hacer focus en el primer campo
dataLayer.push({ 'event': 'demo_form_started' });

// Al enviar con éxito
dataLayer.push({
  'event': 'demo_form_submitted',
  'empresa': formData.empresa,
  'cargo': formData.cargo,
  'expedientes_ano': formData.expedientesAno
});

// Conversión
dataLayer.push({
  'event': 'generate_lead',
  'lead_type': 'demo',
  'currency': 'EUR',
  'value': 150
});
```

### 9.4 Formulario de contacto (en ContactoClient.tsx)

```javascript
// Al hacer focus en el primer campo
dataLayer.push({ 'event': 'contact_form_started' });

// Al enviar con éxito
dataLayer.push({
  'event': 'contact_form_submitted',
  'asunto': formData.asunto
});

// Conversión
dataLayer.push({
  'event': 'generate_lead',
  'lead_type': 'contact',
  'currency': 'EUR',
  'value': 50
});
```

### 9.5 Login portal (en LoginClient o página de login)

```javascript
dataLayer.push({
  'event': 'login_portal_clicked',
  'portal_type': 'app_principal'  // o 'cliente', según corresponda
});
```

### 9.6 Error de formulario

```javascript
dataLayer.push({
  'event': 'form_error',
  'form_name': 'demo',
  'error_type': 'validation',
  'field_name': 'email'
});
```

---

## 10. Estructura del contenedor GTM

### Tags (18)

| # | Nombre | Tipo | Trigger | Notas |
|---|--------|------|---------|-------|
| 1 | GA4 - Config - Base | GA4 Config | All Pages | Measurement ID, send_page_view, consent mode |
| 2 | GA4 - Event - CTA Clicked | GA4 Event | CE: cta_clicked | button_text, cta_location, destination_url |
| 3 | GA4 - Event - Demo Requested | GA4 Event | CE: demo_form_submitted | empresa, cargo, expedientes_ano |
| 4 | GA4 - Event - Contact Submitted | GA4 Event | CE: contact_form_submitted | asunto |
| 5 | GA4 - Event - Demo Form Started | GA4 Event | CE: demo_form_started | — |
| 6 | GA4 - Event - Contact Form Started | GA4 Event | CE: contact_form_started | — |
| 7 | GA4 - Event - Scroll Depth | GA4 Event | Scroll Depth 25/50/75/100 | percent_scrolled, content_group |
| 8 | GA4 - Event - Outbound Link | GA4 Event | Click: Outbound Links | link_url, link_text |
| 9 | GA4 - Event - Pricing Viewed | GA4 Event | PV: /precios | — |
| 10 | GA4 - Event - Login Portal | GA4 Event | CE: login_portal_clicked | portal_type |
| 11 | GA4 - Event - Engaged 30s | GA4 Event | Timer: 30s | content_group |
| 12 | GA4 - Event - Navigation Clicked | GA4 Event | CE: navigation_clicked | menu_item, menu_section |
| 13 | GA4 - Event - Form Error | GA4 Event | CE: form_error | form_name, error_type, field_name |
| 14 | GA4 - Event - Generate Lead | GA4 Event | CE: generate_lead | lead_type, value, currency |
| 15 | GA4 - Event - Solution Explored | GA4 Event | CE: solution_explored | solution_name |
| 16 | GA4 - Event - Segment Explored | GA4 Event | CE: segment_explored | segment_name |
| 17 | GA4 - Event - Modelo Explored | GA4 Event | CE: modelo_explored | modelo_type |
| 18 | GA4 - Event - Lead Magnet Download | GA4 Event | CE: lead_magnet_download | lead_magnet_name, lead_source |
| 19 | HTML - Consent Mode Default | Custom HTML | Consent Init (All Pages, prioridad) | Consent Mode v2 |

### Triggers (22)

| # | Nombre | Tipo | Condición |
|---|--------|------|-----------|
| 1 | All Pages | Page View | — |
| 2 | DOM Ready - All Pages | DOM Ready | — |
| 3 | Window Loaded - All Pages | Window Loaded | — |
| 4 | CE - demo_form_submitted | Custom Event | event = demo_form_submitted |
| 5 | CE - contact_form_submitted | Custom Event | event = contact_form_submitted |
| 6 | CE - demo_form_started | Custom Event | event = demo_form_started |
| 7 | CE - contact_form_started | Custom Event | event = contact_form_started |
| 8 | CE - cta_clicked | Custom Event | event = cta_clicked |
| 9 | Scroll Depth - Vertical | Scroll Depth | 25%, 50%, 75%, 100% |
| 10 | Click - Outbound Links | Link Click | Click URL no contiene ulpiano.es |
| 11 | PV - Demo Page | Page View | Page Path = /demo |
| 12 | PV - Contacto Page | Page View | Page Path = /contacto |
| 13 | PV - Precios Page | Page View | Page Path = /precios |
| 14 | PV - Login Page | Page View | Page Path = /login |
| 15 | Timer - 30s Engagement | Timer | Intervalo: 30000ms, Límite: 1 |
| 16 | CE - navigation_clicked | Custom Event | event = navigation_clicked |
| 17 | CE - login_portal_clicked | Custom Event | event = login_portal_clicked |
| 18 | CE - form_error | Custom Event | event = form_error |
| 19 | CE - generate_lead | Custom Event | event = generate_lead |
| 20 | CE - solution_explored | Custom Event | event = solution_explored |
| 21 | CE - segment_explored | Custom Event | event = segment_explored |
| 22 | CE - modelo_explored | Custom Event | event = modelo_explored |
| 23 | CE - lead_magnet_download | Custom Event | event = lead_magnet_download |

### Variables (19)

| # | Nombre | Tipo | Data Layer Key / Lógica |
|---|--------|------|------------------------|
| 1 | DLV - form_name | Data Layer | `form_name` |
| 2 | DLV - form_location | Data Layer | `form_location` |
| 3 | DLV - button_text | Data Layer | `button_text` |
| 4 | DLV - cta_location | Data Layer | `cta_location` |
| 5 | DLV - destination_url | Data Layer | `destination_url` |
| 6 | DLV - inquiry_type | Data Layer | `asunto` |
| 7 | DLV - expedientes_ano | Data Layer | `expedientes_ano` |
| 8 | DLV - portal_type | Data Layer | `portal_type` |
| 9 | DLV - link_url | Data Layer | `link_url` |
| 10 | DLV - link_text | Data Layer | `link_text` |
| 11 | DLV - solution_name | Data Layer | `solution_name` |
| 12 | DLV - segment_name | Data Layer | `segment_name` |
| 13 | DLV - modelo_type | Data Layer | `modelo_type` |
| 14 | DLV - lead_type | Data Layer | `lead_type` |
| 15 | DLV - error_type | Data Layer | `error_type` |
| 16 | DLV - field_name | Data Layer | `field_name` |
| 17 | CJS - Content Group | Custom JS | Clasifica por pathname |
| 18 | CJS - Page Type | Custom JS | Clasifica por pathname |
| 19 | DLV - lead_magnet_name | Data Layer | `lead_magnet_name` |
| 20 | DLV - lead_source | Data Layer | `lead_source` |
| 21 | Const - GA4 Measurement ID | Constante | `G-XXXXXXXXX` (reemplazar) |

---

## 11. Validación pre-lanzamiento

### Checklist

- [ ] Consent Mode v2 dispara antes que cualquier tag de medición
- [ ] GA4 Config tag carga en All Pages con Consent Mode activo
- [ ] Todos los eventos custom disparan solo tras dataLayer.push()
- [ ] `generate_lead` dispara exactamente una vez por submit exitoso
- [ ] Scroll depth no dispara en páginas cortas (< viewport height)
- [ ] Timer de 30s no dispara en bounce sessions
- [ ] Outbound links excluyen correctamente dominios propios
- [ ] No hay PII en ningún evento (sin email, nombre, teléfono)
- [ ] UTMs se preservan correctamente en navegación interna
- [ ] DebugView de GA4 muestra todos los eventos con parámetros correctos
- [ ] Conversiones marcadas como Key Events en GA4 Admin
- [ ] Audiences configuradas en GA4 Admin
- [ ] Cross-domain tracking configurado si app.ulpiano.es existe

### Testing por navegador

- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)

---

## 12. Reporting — Dashboards recomendados

### Dashboard 1: Acquisition Overview

- Sesiones por source/medium
- Tasa de conversión por canal (generate_lead / sessions)
- Coste por lead (si Google Ads conectado)
- Nuevos vs. recurrentes

### Dashboard 2: Content Performance

- Páginas más vistas por content_group
- Scroll depth medio por página
- Engaged sessions (30s+) por content_group
- Path de navegación más común antes de conversión

### Dashboard 3: Conversion Funnel

- Funnel: page_view → cta_clicked → form_started → form_submitted → generate_lead
- Drop-off rate por paso
- Tiempo medio de conversión
- Form error rate por campo

### Dashboard 4: ICP Identification

- Visitas a páginas de segmento (/pensado-para/*)
- Conversiones por segmento de ICP
- Soluciones más exploradas antes de conversión
- Modelos más consultados por segmento

---

## 13. Roadmap de medición

### Fase 1 — Fundación (actual)
- [x] GTM instalado
- [ ] Consent Mode v2
- [ ] GA4 Configuration + eventos base
- [ ] dataLayer pushes en formularios
- [ ] Key Events configurados

### Fase 2 — Optimización (mes 2-3)
- [ ] Google Ads conversion tracking
- [ ] Enhanced Conversions (first-party data)
- [ ] LinkedIn Insight Tag
- [ ] Audiences para retargeting
- [ ] A/B testing framework

### Fase 3 — Escala (mes 4-6)
- [ ] Server-side GTM (reducir latencia, mejorar data quality)
- [ ] CRM integration (lead scoring desde analytics)
- [ ] Offline conversion import (demo → cliente)
- [ ] Attribution modeling avanzado
- [ ] Predictive audiences en GA4
