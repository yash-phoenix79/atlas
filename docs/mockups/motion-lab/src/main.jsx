import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import "./styles.css";

const resources = [
  { id: "a", type: "ARTICLE", title: "The art of noticing", detail: "Attention changes what we remember.", source: "Field notes", color: "sage" },
  { id: "b", type: "VIDEO", title: "Interfaces that invite exploration", detail: "Motion, hierarchy, and curiosity.", source: "YouTube · 28 min", color: "clay" },
  { id: "c", type: "REPOSITORY", title: "Visual knowledge systems", detail: "Patterns for connected thinking.", source: "GitHub", color: "lilac" },
  { id: "d", type: "BOOK", title: "A system for ideas", detail: "Structure should emerge through use.", source: "Reading list", color: "blue" },
  { id: "e", type: "PDF", title: "Research as a craft", detail: "Methods for source-grounded synthesis.", source: "PDF · 24 pages", color: "sand" },
  { id: "f", type: "NOTE", title: "Questions worth keeping", detail: "A small collection of open loops.", source: "Personal note", color: "rose" }
];
const palettes = {
  organic: { label: "Organic studio", accent: "#385b50", soft: "#d8e6dd", bg: "#f6f4ee", ink: "#282820", muted: "#6b6a61" },
  digital: { label: "Expressive digital", accent: "#5d50d8", soft: "#eeebff", bg: "#f5f6fb", ink: "#20233a", muted: "#686c80" },
  warm: { label: "Warm editorial", accent: "#76523e", soft: "#f2e4d5", bg: "#f6f2e9", ink: "#30291f", muted: "#716658" }
};

function App() {
  const [palette, setPalette] = useState("organic");
  const [dark, setDark] = useState(false);
  const [view, setView] = useState("library");
  const [layout, setLayout] = useState("masonry");
  const [saved, setSaved] = useState([]);
  const [selected, setSelected] = useState("a");
  const [positions, setPositions] = useState({ a: [8, 18], c: [40, 12], d: [68, 32] });
  const reduced = useReducedMotion();
  const p = palettes[palette];
  const theme = {
    "--bg": dark ? "#171916" : p.bg,
    "--surface": dark ? "#20231f" : "#fffefa",
    "--ink": dark ? "#f0f0e7" : p.ink,
    "--muted": dark ? "#a7aca0" : p.muted,
    "--line": dark ? "#393e37" : "#e2dfd5",
    "--accent": dark ? (palette === "digital" ? "#b4aaff" : palette === "warm" ? "#e5b99c" : "#a4d2bc") : p.accent,
    "--accent-soft": dark ? (palette === "digital" ? "#34314d" : palette === "warm" ? "#403126" : "#293b31") : p.soft
  };
  const transition = reduced ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 };
  const chosen = resources.find((r) => r.id === selected) || resources[0];
  const move = (id, dx, dy) => setPositions((old) => {
    const [x, y] = old[id] || [8, 18];
    return { ...old, [id]: [Math.max(0, Math.min(78, x + dx)), Math.max(0, Math.min(75, y + dy))] };
  });
  const toggleSaved = (id) => setSaved((old) => old.includes(id) ? old.filter((x) => x !== id) : [...old, id]);

  return <div className={dark ? "app dark" : "app"} style={theme}>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Atlas Motion Lab home"><span className="brandmark">a</span> atlas <span className="labtag">MOTION LAB</span></a>
      <div className="top-actions"><button className="quiet" onClick={() => setDark((v) => !v)} aria-pressed={dark}>{dark ? "☼ Light" : "◐ Dark"}</button><span className="quiet docslink">Exploratory · not production</span></div>
    </header>
    <main id="top">
      <section className="intro">
        <div><div className="eyebrow">A personal knowledge universe</div><h1>Keep what matters.<br/><em>See what connects.</em></h1><p>Compare visual discovery, spatial thinking, and source-first research. All content is illustrative; nothing is saved to a server.</p></div>
        <div className="palette-switch" role="group" aria-label="Color direction">{Object.entries(palettes).map(([key, val]) => <button key={key} className={palette === key ? "swatch active" : "swatch"} onClick={() => setPalette(key)} aria-pressed={palette === key}><i style={{background:val.accent}}/>{val.label}</button>)}</div>
      </section>
      <nav className="tabs" aria-label="Design lab views">{[["library","Library"],["board","Whiteboard"],["research","Read & research"]].map(([key,label]) => <button key={key} className={view === key ? "tab active" : "tab"} onClick={() => setView(key)} aria-current={view === key ? "page" : undefined}>{label}</button>)}<span className="motion-note">{reduced ? "Reduced motion preference detected" : "Motion for React enabled"}</span></nav>
      <AnimatePresence mode="wait" initial={false}>
        {view === "library" && <motion.section key="library" className="view" initial={reduced ? false : {opacity:0,y:8}} animate={{opacity:1,y:0}} exit={reduced ? undefined : {opacity:0,y:-5}} transition={transition}>
          <div className="viewhead"><div><div className="eyebrow">Discover</div><h2>A library that feels alive.</h2><p>Compare a visual collection with a calmer index.</p></div><div className="segmented" role="group" aria-label="Resource layout">{["masonry","shelves","list"].map((v) => <button key={v} className={layout===v?"selected":""} onClick={() => setLayout(v)} aria-pressed={layout===v}>{v[0].toUpperCase()+v.slice(1)}</button>)}</div></div>
          {layout === "shelves" ? <div className="shelves"><h3>Continue exploring</h3><div className="shelfrow"><LayoutGroup>{resources.slice(0,4).map((r)=><Resource key={r.id} item={r} selected={selected===r.id} saved={saved.includes(r.id)} onSelect={()=>setSelected(r.id)} onSave={()=>toggleSaved(r.id)} transition={transition}/>)}</LayoutGroup></div><h3>Ideas to revisit</h3><div className="shelfrow"><LayoutGroup>{resources.slice(2).map((r)=><Resource key={r.id} item={r} selected={selected===r.id} saved={saved.includes(r.id)} onSelect={()=>setSelected(r.id)} onSave={()=>toggleSaved(r.id)} transition={transition}/>)}</LayoutGroup></div></div> : <div className={layout==="list"?"resource-list":"resource-grid"}><LayoutGroup>{resources.map((r)=><Resource key={r.id} item={r} selected={selected===r.id} saved={saved.includes(r.id)} onSelect={()=>setSelected(r.id)} onSave={()=>toggleSaved(r.id)} transition={transition} compact={layout==="list"}/>)}</LayoutGroup></div>}
        </motion.section>}
        {view === "board" && <motion.section key="board" className="view" initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0}} transition={transition}>
          <div className="viewhead"><div><div className="eyebrow">Think spatially</div><h2>Ideas need room.</h2><p>Drag a card, or focus it and use arrow keys. These controls are alternatives.</p></div><button className="quiet" onClick={()=>setPositions({a:[8,18],c:[40,12],d:[68,32]})}>Reset layout</button></div>
          <div className="canvas" aria-label="Interactive sample whiteboard">{Object.entries(positions).map(([id,[x,y]])=>{const item=resources.find(r=>r.id===id);return <motion.article key={id} className="boardcard" drag dragMomentum={false} dragElastic={0} dragConstraints={{left:0,right:680,top:0,bottom:300}} style={{left:x+"%",top:y+"%"}} onDragEnd={(_,info)=>move(id,Math.round(info.offset.x/18),Math.round(info.offset.y/18))} tabIndex={0} role="group" aria-label={item.title+". Use arrow keys to move."} onKeyDown={(e)=>{const d={ArrowLeft:[-2,0],ArrowRight:[2,0],ArrowUp:[0,-2],ArrowDown:[0,2]}[e.key];if(d){e.preventDefault();move(id,d[0],d[1]);}}}><div className={"art "+item.color}>{item.title}</div><div className="cardbody"><b>{item.title}</b><span>{item.source}</span></div></motion.article>})}</div>
          <p className="subtle">Prototype only: board positions are held in memory. Verify drag constraints, touch gestures, keyboard behavior, and screen-reader output in a real browser.</p>
        </motion.section>}
        {view === "research" && <motion.section key="research" className="view" initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0}} transition={transition}>
          <div className="viewhead"><div><div className="eyebrow">Read with evidence</div><h2>Keep the source in view.</h2><p>Source, personal notes, and generated synthesis must remain distinguishable.</p></div><button className="quiet" onClick={()=>setSelected(resources[(resources.findIndex(r=>r.id===selected)+1)%resources.length].id)}>Next sample →</button></div>
          <div className="research-layout"><article className="sourcepaper"><div className="eyebrow">Sample source · illustrative</div><h3>{chosen.title}</h3><p className="lead">{chosen.detail}</p><blockquote>Sample passage for layout testing — not a quotation from an external publication.</blockquote><p>In a real resource view, extracted passages should link back to a source URL, page, or timestamp when available. This lab has no extraction or citation backend.</p></article><aside className="evidence"><div className="eyebrow">Provenance panel</div><h3>What can be verified?</h3><div className="evidenceitem"><b>SOURCE</b><p>Original text and metadata</p><small>Should link to URL, page, or timestamp.</small></div><div className="evidenceitem"><b>YOUR NOTE</b><p>Personal interpretation</p><small>User-authored, not a source claim.</small></div><div className="evidenceitem"><b>AI SYNTHESIS</b><p>Generated summary or comparison</p><small>Would require citations to actual excerpts.</small></div></aside></div>
        </motion.section>}
      </AnimatePresence>
      <footer className="foot"><span>ATLAS · DESIGN EXPLORATION</span><span>{reduced?"Reduced motion respected":"Motion should be purposeful"}</span><span>No server persistence</span></footer>
    </main>
  </div>;
}

function Resource({item,selected,saved,onSelect,onSave,transition,compact=false}) {
  return <motion.article layout layoutId={"resource-"+item.id} transition={transition} className={"resource "+(selected?"is-selected ":"")+(compact?"compact":"")}>
    <button className="resource-main" onClick={onSelect} aria-pressed={selected}><div className={"art "+item.color}><span className="kind">{item.type}</span><span className="arttitle">{item.title}</span><span className="artindex">ATLAS / {item.id.toUpperCase()}</span></div><div className="cardbody"><b>{item.title}</b><span>{item.detail}</span><small>{item.source}</small></div></button>
    <button className="save" onClick={onSave} aria-label={saved?"Remove from saved":"Save resource"} aria-pressed={saved}>{saved?"♥":"♡"}</button>
  </motion.article>;
}

createRoot(document.getElementById("root")).render(<App />);
