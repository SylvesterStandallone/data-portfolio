"use client"

/*
  Ilustraciones de los casos de estudio.
  SVG inline con la paleta del sistema: terminal #050505, border #2d3139,
  primary #22d3ee, muted-foreground #98a2b3. viewBox 400x225 (aspect-video).
*/

type Lang = "es" | "en"

const MONO = "var(--font-jetbrains), monospace"

const labels = {
  es: {
    erpAlt: "Diagrama: rediseño de índices que reduce el tiempo de consulta de 2.4s a 0.8s",
    tables: ["tbl_ordenes", "tbl_stock"],
    before: "antes",
    after: "después",
    locks: "0 bloqueos concurrentes",
    zdtAlt: "Diagrama: migración con dual-write desde on-premise hacia Forsta, 100% de uptime e integridad",
    checksum: "checksum por lote",
    integrity: "100% · 0 filas perdidas",
  },
  en: {
    erpAlt: "Diagram: index redesign cutting query time from 2.4s to 0.8s",
    tables: ["tbl_orders", "tbl_stock"],
    before: "before",
    after: "after",
    locks: "0 concurrent locks",
    zdtAlt: "Diagram: dual-write migration from on-premise to Forsta, 100% uptime and integrity",
    checksum: "checksum per batch",
    integrity: "100% · 0 rows lost",
  },
} satisfies Record<Lang, Record<string, string | string[]>>

/** Grilla de blueprint + glow, reutilizable. */
function Defs({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      </pattern>
      <filter id={`${id}-glow`} x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="4" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  )
}

/** Caso 1 — Optimización de ERP Core: tablas → índice → tiempo de consulta. */
export function ErpCoreVisual({ lang }: { lang: Lang }) {
  const l = labels[lang]

  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" role="img" aria-label={l.erpAlt}>
      <Defs id="erp" />
      <rect width="400" height="225" fill="#050505" />
      <rect width="400" height="225" fill="url(#erp)" />

      <text x="18" y="26" fill="#98a2b3" fontFamily={MONO} fontSize="9" letterSpacing="1.2">
        QUERY PLAN
      </text>
      <line x1="18" y1="32" x2="382" y2="32" stroke="#2d3139" strokeWidth="1" />

      {/* Tablas de origen */}
      {l.tables.map((name, idx) => {
        const y = idx === 0 ? 46 : 106
        return (
          <g key={name}>
            <rect x="18" y={y} width="94" height="54" rx="4" fill="#14171d" stroke="#2d3139" />
            <path d={`M18 ${y + 4}a4 4 0 0 1 4-4h86a4 4 0 0 1 4 4v10H18z`} fill="#1c2027" />
            <text x="26" y={y + 11} fill="#98a2b3" fontFamily={MONO} fontSize="8">
              {name}
            </text>
            {[0, 1, 2].map((r) => (
              <line
                key={r}
                x1="26"
                y1={y + 26 + r * 10}
                x2={r === 2 ? 78 : 104}
                y2={y + 26 + r * 10}
                stroke="#2d3139"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ))}
          </g>
        )
      })}

      {/* Conectores hacia el índice */}
      <path
        d="M112 73h16a8 8 0 0 1 8 8v18M112 133h16a8 8 0 0 0 8-8v-18"
        fill="none"
        stroke="#2d3139"
        strokeWidth="1.5"
      />

      {/* Nodo de índice */}
      <rect x="136" y="82" width="62" height="42" rx="5" fill="#0b0d11" stroke="#22d3ee" strokeOpacity="0.6" />
      <text x="167" y="101" fill="#22d3ee" fontFamily={MONO} fontSize="12" textAnchor="middle" fontWeight="600">
        IDX
      </text>
      <text x="167" y="114" fill="#98a2b3" fontFamily={MONO} fontSize="8" textAnchor="middle">
        b-tree
      </text>

      <path d="M198 103h34" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1.5" />
      <path d="M232 103l-6-4v8z" fill="#22d3ee" fillOpacity="0.6" />

      {/* Comparación de tiempos */}
      <line x1="248" y1="180" x2="382" y2="180" stroke="#2d3139" strokeWidth="1" />

      <rect x="262" y="76" width="36" height="104" rx="2" fill="#2d3139" />
      <text x="280" y="69" fill="#98a2b3" fontFamily={MONO} fontSize="11" textAnchor="middle">
        2.4s
      </text>
      <text x="280" y="194" fill="#98a2b3" fontFamily={MONO} fontSize="8" textAnchor="middle">
        {l.before}
      </text>

      <rect x="332" y="145" width="36" height="35" rx="2" fill="#22d3ee" filter="url(#erp-glow)" />
      <text x="350" y="138" fill="#22d3ee" fontFamily={MONO} fontSize="11" textAnchor="middle" fontWeight="600">
        0.8s
      </text>
      <text x="350" y="194" fill="#98a2b3" fontFamily={MONO} fontSize="8" textAnchor="middle">
        {l.after}
      </text>

      <g transform="translate(324 52)">
        <rect
          x="-24"
          y="-10"
          width="48"
          height="19"
          rx="9.5"
          fill="#22d3ee"
          fillOpacity="0.12"
          stroke="#22d3ee"
          strokeOpacity="0.4"
        />
        <text x="0" y="4" fill="#22d3ee" fontFamily={MONO} fontSize="10" textAnchor="middle" fontWeight="600">
          −67%
        </text>
      </g>

      {/* Bloqueos eliminados */}
      <text x="18" y="194" fill="#98a2b3" fontFamily={MONO} fontSize="9">
        <tspan fill="#22d3ee">✓</tspan> {l.locks}
      </text>
    </svg>
  )
}

/** Caso 2 — Migración Enterprise Zero Downtime: on-prem → Forsta con dual-write. */
export function ZeroDowntimeVisual({ lang }: { lang: Lang }) {
  const l = labels[lang]

  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" role="img" aria-label={l.zdtAlt}>
      <Defs id="zdt" />
      <rect width="400" height="225" fill="#050505" />
      <rect width="400" height="225" fill="url(#zdt)" />

      <text x="18" y="26" fill="#98a2b3" fontFamily={MONO} fontSize="9" letterSpacing="1.2">
        CUTOVER
      </text>
      <line x1="18" y1="32" x2="382" y2="32" stroke="#2d3139" strokeWidth="1" />

      {/* Origen on-premise */}
      <g>
        <path d="M28 62v58c0 6 16 11 36 11s36-5 36-11V62z" fill="#14171d" stroke="#2d3139" />
        <ellipse cx="64" cy="62" rx="36" ry="11" fill="#1c2027" stroke="#2d3139" />
        <ellipse cx="64" cy="86" rx="36" ry="11" fill="none" stroke="#2d3139" strokeOpacity="0.6" />
        <ellipse cx="64" cy="104" rx="36" ry="11" fill="none" stroke="#2d3139" strokeOpacity="0.6" />
        <text x="64" y="152" fill="#98a2b3" fontFamily={MONO} fontSize="9" textAnchor="middle">
          ON-PREM
        </text>
        <circle cx="46" cy="163" r="3" fill="#22d3ee" className="case-pulse" />
        <text x="56" y="166" fill="#22d3ee" fontFamily={MONO} fontSize="8">
          live
        </text>
      </g>

      {/* Flujo dual-write */}
      {[78, 104].map((y) => (
        <g key={y}>
          <line
            x1="106"
            y1={y}
            x2="264"
            y2={y}
            stroke="#22d3ee"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="case-flow"
          />
          <path d={`M272 ${y}l-8-5v10z`} fill="#22d3ee" fillOpacity="0.7" />
        </g>
      ))}
      <text x="188" y="66" fill="#22d3ee" fontFamily={MONO} fontSize="9" textAnchor="middle">
        CDC · dual-write
      </text>
      <text x="188" y="124" fill="#98a2b3" fontFamily={MONO} fontSize="8" textAnchor="middle">
        {l.checksum}
      </text>

      {/* Destino Forsta */}
      <g>
        <rect x="276" y="52" width="100" height="80" rx="6" fill="#0b0d11" stroke="#22d3ee" strokeOpacity="0.6" />
        <path d="M276 58a6 6 0 0 1 6-6h88a6 6 0 0 1 6 6v10H276z" fill="#14171d" />
        {[286, 294, 302].map((cx) => (
          <circle key={cx} cx={cx} cy="60" r="2.5" fill="#2d3139" />
        ))}
        <text x="326" y="94" fill="#f5f7fa" fontFamily={MONO} fontSize="12" textAnchor="middle" fontWeight="600">
          FORSTA
        </text>
        <circle cx="326" cy="112" r="9" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeOpacity="0.5" />
        <path
          d="M321.5 112l3 3.5 6-7"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="326" y="152" fill="#98a2b3" fontFamily={MONO} fontSize="9" textAnchor="middle">
          ENTERPRISE
        </text>
      </g>

      {/* Barra de uptime */}
      <text x="18" y="180" fill="#98a2b3" fontFamily={MONO} fontSize="8">
        UPTIME
      </text>
      <text x="382" y="180" fill="#22d3ee" fontFamily={MONO} fontSize="8" textAnchor="end">
        {l.integrity}
      </text>
      {Array.from({ length: 24 }, (_, i) => (
        <rect key={i} x={18 + i * 15.3} y="188" width="12" height="8" rx="1.5" fill="#22d3ee" fillOpacity="0.55" />
      ))}
    </svg>
  )
}

export const caseVisuals = {
  hub: ErpCoreVisual,
  cloud: ZeroDowntimeVisual,
} as const
