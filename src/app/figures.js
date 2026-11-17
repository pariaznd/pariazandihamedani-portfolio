// Diagrams for the project section.
// They explain how each project works. They show methods only:
// no real data and no patient images.
// Colours and text sizes come from the .fig classes in globals.css.
// The motion is plain CSS (see the "Diagram motion" part of globals.css).
// It starts when the diagram scrolls into view (LiveFrame in client.js)
// and is switched off for people who ask for reduced motion.

function ArrowHead({ id }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="8.5"
      refY="5"
      markerWidth="10"
      markerHeight="10"
      markerUnits="userSpaceOnUse"
      orient="auto"
    >
      <path d="M1.5 1.5 L8.5 5 L1.5 8.5" className="fig-arrowhead" />
    </marker>
  );
}

// A small yellow dot that travels along a path (used for "data moving").
function Dot({ className, path, style }) {
  return (
    <circle
      cx="0"
      cy="0"
      r="5.5"
      className={`fig-dot ${className}`}
      style={{ offsetPath: `path("${path}")`, ...style }}
    />
  );
}

/* ---------------------------------------------------------------
   Hydro: asymmetric loss, and how the forecast is built
--------------------------------------------------------------- */

export function HydroFigure() {
  return (
    <svg
      className="fig"
      viewBox="0 0 480 320"
      role="img"
      aria-label="Chart of an asymmetric loss: forecasting too high costs four times more than forecasting too low. Below it, the forecast equals a 90-day average plus a LightGBM correction."
    >
      <polygon points="200,188 36,150 36,188" className="fig-fjord hydro-area" />
      <polygon points="200,188 364,36 364,188" className="fig-hi hydro-area" />
      <line x1="24" y1="188" x2="456" y2="188" className="fig-axis" />
      <polyline
        points="36,150 200,188 364,36"
        className="fig-line hydro-line"
        pathLength="1"
      />
      <Dot className="hydro-dot" path="M36 150 L200 188 L364 36" />

      <text x="36" y="62" className="fig-strong">Forecasting too high</text>
      <text x="36" y="84" className="fig-strong">costs 4× more than too low.</text>
      <text x="118" y="214" textAnchor="middle" className="fig-sub">forecast too low</text>
      <text x="282" y="214" textAnchor="middle" className="fig-sub">forecast too high</text>

      <g className="pop" style={{ "--d": "0.9s" }}>
        <rect x="24" y="244" width="128" height="44" rx="22" className="fig-node" />
        <text x="88" y="271" textAnchor="middle">90-day average</text>
      </g>
      <text x="166" y="273" textAnchor="middle" className="fig-op pop" style={{ "--d": "1.1s" }}>+</text>
      <g className="pop" style={{ "--d": "1.3s" }}>
        <rect x="180" y="244" width="168" height="44" rx="22" className="fig-node-hi" />
        <text x="264" y="271" textAnchor="middle">LightGBM correction</text>
      </g>
      <text x="362" y="273" textAnchor="middle" className="fig-op pop" style={{ "--d": "1.5s" }}>=</text>
      <g className="pop" style={{ "--d": "1.7s" }}>
        <rect x="374" y="244" width="82" height="44" rx="22" className="fig-node-ink" />
        <text x="415" y="271" textAnchor="middle" className="fig-on-ink">forecast</text>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------
   ODELIA: two models, averaged
--------------------------------------------------------------- */

export function OdeliaFigure() {
  return (
    <svg
      className="fig"
      viewBox="0 0 480 320"
      role="img"
      aria-label="Diagram: an MRI volume goes into a 3D ResNet18, and maximum-intensity projections go into a 2D ResNet50. Their logits are averaged with weights 0.6 and 0.4 to give the prediction."
    >
      <defs>
        <ArrowHead id="odelia-arrow" />
      </defs>

      {/* MRI volume: three stacked slices */}
      <rect x="14" y="66" width="54" height="38" rx="6" className="fig-node-ice" />
      <rect x="22" y="74" width="54" height="38" rx="6" className="fig-node-ice" />
      <rect x="30" y="82" width="54" height="38" rx="6" className="fig-node" />
      <text x="49" y="146" textAnchor="middle" className="fig-sub">MRI volume</text>

      {/* Maximum-intensity projections: four small images */}
      <rect x="24" y="214" width="26" height="26" rx="5" className="fig-tile-a" />
      <rect x="56" y="214" width="26" height="26" rx="5" className="fig-tile-b" />
      <rect x="24" y="246" width="26" height="26" rx="5" className="fig-tile-c" />
      <rect x="56" y="246" width="26" height="26" rx="5" className="fig-tile-d" />
      <text x="53" y="296" textAnchor="middle" className="fig-sub">4-channel MIPs</text>

      <path d="M92 93 H132" className="fig-wire" markerEnd="url(#odelia-arrow)" />
      <path d="M92 243 H132" className="fig-wire" markerEnd="url(#odelia-arrow)" />

      <g className="od-model">
        <rect x="136" y="67" width="148" height="52" rx="12" className="fig-node" />
        <text x="210" y="90" textAnchor="middle">3D ResNet18</text>
        <text x="210" y="108" textAnchor="middle" className="fig-sub">trained from scratch</text>
      </g>

      <g className="od-model">
        <rect x="136" y="217" width="148" height="52" rx="12" className="fig-node" />
        <text x="210" y="240" textAnchor="middle">2D ResNet50</text>
        <text x="210" y="258" textAnchor="middle" className="fig-sub">reads the MIPs</text>
      </g>

      <path d="M284 93 H299 V140 H312" className="fig-wire" markerEnd="url(#odelia-arrow)" />
      <path d="M284 243 H299 V196 H312" className="fig-wire" markerEnd="url(#odelia-arrow)" />

      <g className="od-avg">
        <rect x="316" y="116" width="68" height="104" rx="16" className="fig-node-hi" />
        <text x="350" y="152" textAnchor="middle">Average</text>
        <text x="350" y="171" textAnchor="middle">logits</text>
        <text x="350" y="198" textAnchor="middle" className="fig-on-hi">0.6 / 0.4</text>
      </g>

      <path d="M384 168 H402" className="fig-wire" markerEnd="url(#odelia-arrow)" />
      <text x="406" y="173">Prediction</text>

      {/* data moving through: scan in, model out, average, prediction */}
      <Dot className="od-a" path="M92 93 H132" />
      <Dot className="od-a" path="M92 243 H132" />
      <Dot className="od-b" path="M284 93 H299 V140 H312" />
      <Dot className="od-b" path="M284 243 H299 V196 H312" />
      <Dot className="od-c" path="M384 168 H402" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Porto: GPS traces, and one query getting faster
--------------------------------------------------------------- */

const PORTO_MAIN = "M30 150 C90 150 110 90 170 92 S260 130 300 100 S380 50 450 60";

export function PortoFigure() {
  const gridX = [60, 96, 132, 168, 204, 240, 276, 312, 348, 384, 420];
  const gridY = [56, 88, 120, 152];
  const traces = [
    "M30 110 C70 100 130 60 200 56 S300 62 360 40 S430 40 452 32",
    "M30 60 C80 70 120 120 190 118 S280 70 340 90 S410 140 450 120",
    "M60 178 C100 140 150 150 200 140 S270 170 330 150 S400 100 450 96",
    "M110 182 C130 150 170 120 230 118 S330 120 380 98",
    "M40 170 C120 176 180 160 250 164 S360 150 450 160",
  ];
  return (
    <svg
      className="fig"
      viewBox="0 0 480 320"
      role="img"
      aria-label="Taxi GPS traces drawn over a street grid, and a bar chart in which one spatial query falls from 8 minutes to 23 seconds."
    >
      <rect x="24" y="20" width="432" height="168" rx="12" className="fig-map" />
      {gridX.map((x) => (
        <line key={`x${x}`} x1={x} y1="20" x2={x} y2="188" className="fig-grid" />
      ))}
      {gridY.map((y) => (
        <line key={`y${y}`} x1="24" y1={y} x2="456" y2={y} className="fig-grid" />
      ))}

      <g className="fig-trace">
        {traces.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength="1"
            className="porto-trace"
            style={{ "--d": `${i * 0.18}s` }}
          />
        ))}
      </g>
      <path className="fig-trace-main porto-main" d={PORTO_MAIN} pathLength="1" />
      <circle cx="30" cy="150" r="4.5" className="fig-dot" />
      <circle cx="450" cy="60" r="4.5" className="fig-dot" />
      <Dot className="porto-car" path={PORTO_MAIN} />

      <rect x="32" y="152" width="290" height="26" rx="13" className="fig-label-bg" />
      <text x="46" y="170" className="fig-sub">1.67 million trips, 83.4 million GPS points</text>

      <text x="24" y="216" className="fig-sub">One spatial query</text>
      <text x="24" y="250">Before</text>
      <rect x="84" y="234" width="300" height="22" rx="5" className="fig-node-ink porto-before" />
      <text x="394" y="250" className="porto-l-before">8 min</text>
      <text x="24" y="286">After</text>
      <rect x="84" y="270" width="14.4" height="22" rx="4" className="fig-node-hi porto-after" />
      <text x="108" y="286" className="porto-l-after">23 s</text>
    </svg>
  );
}

/* ---------------------------------------------------------------
   Snow poles: a winter road with detection boxes
--------------------------------------------------------------- */

export function SnowFigure() {
  const cx = 240;
  const horizon = 134;
  const nearest = 280;
  const yAt = (d) => horizon + (nearest - horizon) * d;
  const halfRoad = (y) => 10 + 112 * ((y - horizon) / (nearest - horizon));

  const poles = [1, 0.62, 0.38, 0.22].flatMap((d) =>
    [-1, 1].map((side) => {
      const y = yAt(d);
      return {
        d,
        side,
        y,
        x: cx + side * (halfRoad(y) + 12 + 18 * d),
        h: 18 + 92 * d,
        w: 2.5 + 4.5 * d,
      };
    })
  );

  const dashes = [
    [0.08, 0.16],
    [0.26, 0.38],
    [0.5, 0.66],
    [0.8, 1.06],
  ].map(([d0, d1]) => {
    const y0 = yAt(d0);
    const y1 = yAt(d1);
    const w0 = 0.8 + 5.5 * d0;
    const w1 = 0.8 + 5.5 * d1;
    return `${cx - w0},${y0} ${cx + w0},${y0} ${cx + w1},${y1} ${cx - w1},${y1}`;
  });

  const bottom = 296;
  const road = `${cx - 10},${horizon} ${cx + 10},${horizon} ${cx + halfRoad(bottom)},${bottom} ${cx - halfRoad(bottom)},${bottom}`;

  // The scanner sweeps left to right over 5 seconds. Each box lights up
  // when the scanner reaches it.
  const SWEEP = 5;
  const BAND = 56;
  const boxDelay = (x) => (((x - 24 - BAND / 2) / (432 - BAND)) * SWEEP).toFixed(2);

  return (
    <svg
      className="fig"
      viewBox="0 0 480 320"
      role="img"
      aria-label="Drawing of a winter road with snow poles on both sides. A scanner sweeps across the scene and each pole is marked with a detection box."
    >
      <defs>
        <clipPath id="snow-clip">
          <rect x="24" y="24" width="432" height="272" rx="14" />
        </clipPath>
      </defs>
      <g clipPath="url(#snow-clip)">
        <rect x="24" y="24" width="432" height="112" className="fig-sky" />
        <path
          className="fig-hills"
          d="M24 136 L84 102 L146 126 L212 94 L270 128 L338 98 L398 124 L456 106 L456 136 Z"
        />
        <rect x="24" y={horizon} width="432" height={296 - horizon} className="fig-snow" />
        <polygon points={road} className="fig-road" />
        {dashes.map((points) => (
          <polygon key={points} points={points} className="fig-dash" />
        ))}
        {poles.map((p) => {
          const pad = 5 + 5 * p.d;
          return (
            <g key={`${p.side}-${p.d}`}>
              <rect x={p.x - p.w / 2} y={p.y - p.h} width={p.w} height={p.h} className="fig-pole" />
              <rect x={p.x - p.w / 2} y={p.y - p.h} width={p.w} height={p.h * 0.24} className="fig-pole-cap" />
              <rect
                x={p.x - p.w / 2 - pad}
                y={p.y - p.h - pad}
                width={p.w + 2 * pad}
                height={p.h + 2 * pad}
                rx="3"
                className="fig-box snow-box"
                style={{ "--d": `${boxDelay(p.x)}s` }}
              />
            </g>
          );
        })}
        <rect x="24" y="24" width={BAND} height="272" className="snow-scan" />
        <rect x="64" y="150" width="82" height="22" rx="6" className="fig-chip" />
        <text x="74" y="165.5" className="fig-chip-text">snow pole</text>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------
   SkyBite: the Fleet Manager and its MQTT messages
--------------------------------------------------------------- */

export function SkybiteFigure() {
  const inputs = ["Delivery request", "Drone status", "New no-fly zone", "Abort"];
  const outputs = ["Drone assignment", "New waypoints", "Failure notice"];
  return (
    <svg
      className="fig"
      viewBox="0 0 480 320"
      role="img"
      aria-label="Diagram: the Fleet Manager receives delivery requests, drone status, new no-fly zones and abort messages over MQTT. It sends out drone assignments, new waypoints and failure notices."
    >
      <defs>
        <ArrowHead id="skybite-arrow" />
      </defs>

      <text x="76" y="32" textAnchor="middle" className="fig-sub">MQTT in</text>
      <text x="401" y="32" textAnchor="middle" className="fig-sub">MQTT out</text>

      {inputs.map((label, i) => {
        const y = 52 + i * 54;
        return (
          <g key={label}>
            <rect x="8" y={y} width="136" height="38" rx="19" className="fig-node" />
            <text x="76" y={y + 24} textAnchor="middle" className="fig-pill">{label}</text>
            <path d={`M144 ${y + 19} H178`} className="fig-wire" markerEnd="url(#skybite-arrow)" />
          </g>
        );
      })}

      <g className="sb-core">
        <rect x="184" y="44" width="112" height="216" rx="16" className="fig-node-hi" />
        <text x="240" y="116" textAnchor="middle" className="fig-strong">Fleet</text>
        <text x="240" y="138" textAnchor="middle" className="fig-strong">Manager</text>
        <text x="240" y="174" textAnchor="middle" className="fig-on-hi">state machine</text>
        <text x="240" y="194" textAnchor="middle" className="fig-on-hi">plans routes</text>
        <text x="240" y="212" textAnchor="middle" className="fig-on-hi">assigns drones</text>
        <text x="240" y="230" textAnchor="middle" className="fig-on-hi">reroutes</text>
      </g>

      {outputs.map((label, i) => {
        const y = 79 + i * 54;
        return (
          <g key={label}>
            <path d={`M296 ${y + 19} H326`} className="fig-wire" markerEnd="url(#skybite-arrow)" />
            <rect x="332" y={y} width="138" height="38" rx="19" className="fig-node" />
            <text x="401" y={y + 24} textAnchor="middle" className="fig-pill">{label}</text>
          </g>
        );
      })}

      {/* messages in, a decision, messages out */}
      {inputs.map((label, i) => (
        <Dot
          key={`in-${label}`}
          className="sb-in"
          path={`M144 ${52 + i * 54 + 19} H184`}
          style={{ "--d": `${i * 0.35}s` }}
        />
      ))}
      {outputs.map((label, i) => (
        <Dot
          key={`out-${label}`}
          className="sb-out"
          path={`M296 ${79 + i * 54 + 19} H332`}
          style={{ "--d": `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}
