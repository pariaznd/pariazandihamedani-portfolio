"use client";

// The only parts of the site that need JavaScript in the browser:
// the photo puzzle, the copy-email button and the phone menu.

import { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------
   Photo puzzle. The portrait is cut into nine patches (like my
   Neural Jigsaw project). They start shuffled and slide into place.
   The animation itself is plain CSS, see .tile in globals.css.
--------------------------------------------------------------- */

// Tile i starts in slot START[i]. Every tile starts away from its home slot.
const START = [4, 7, 5, 8, 0, 2, 3, 1, 6];

function randomShuffle() {
  let order;
  do {
    order = Array.from({ length: 9 }, (_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  } while (order.some((slot, i) => slot === i));
  return order;
}

export function JigsawPortrait({ photo, alt }) {
  const [order, setOrder] = useState(START);
  const [round, setRound] = useState(0);

  function shuffleAgain() {
    setOrder(randomShuffle());
    setRound((r) => r + 1);
  }

  return (
    <figure className="portrait">
      <div className="jigsaw" role="img" aria-label={alt} style={{ "--photo": `url(${photo})` }}>
        {/* A new key restarts the CSS animation on every shuffle. */}
        <div className="jigsaw-tiles" key={round} aria-hidden="true">
          {order.map((slot, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <span
                key={i}
                className="tile"
                style={{
                  "--c": col,
                  "--r": row,
                  "--dx": (slot % 3) - col,
                  "--dy": Math.floor(slot / 3) - row,
                  "--rot": `${((i * 37) % 11) - 5}deg`,
                  "--i": i,
                }}
              />
            );
          })}
        </div>
      </div>
      <figcaption>
        <button type="button" className="shuffle" onClick={shuffleAgain}>
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
            <path
              d="M2 5h3.2c1.6 0 2.6.7 3.6 2.2l2.4 3.6c1 1.5 2 2.2 3.6 2.2H18M2 15h3.2c1.6 0 2.6-.7 3.6-2.2M11.2 7.2C12.2 5.7 13.2 5 14.8 5H18M15.5 2.5 18 5l-2.5 2.5M15.5 12.5 18 15l-2.5 2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Shuffle again
        </button>
        <span>Nine patches, put back in order. Like my Neural Jigsaw project.</span>
      </figcaption>
    </figure>
  );
}

/* ---------------------------------------------------------------
   Frame around a project diagram. It tells the CSS when the diagram
   is on screen, so its animation starts when you scroll to it
   (and plays again if you scroll away and back).
--------------------------------------------------------------- */

export function LiveFrame({ className, children }) {
  const ref = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} data-live={live}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------
   Copy the email address.
--------------------------------------------------------------- */

export function CopyEmail({ email }) {
  const [state, setState] = useState("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("done");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2200);
  }

  return (
    <>
      <button type="button" className="copy" onClick={copy}>
        {state === "done" ? "Copied" : "Copy email"}
      </button>
      <span className="sr-only" role="status">
        {state === "done" ? "Email address copied" : state === "failed" ? "Copy failed. Select the address instead." : ""}
      </span>
    </>
  );
}

/* ---------------------------------------------------------------
   Menu for phones. It closes when you pick a link or press Escape.
--------------------------------------------------------------- */

export function NavMenu({ links, cv }) {
  const menu = useRef(null);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape" && menu.current) menu.current.open = false;
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function close() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <details className="menu" ref={menu}>
      <summary>Menu</summary>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={close}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href={cv} download="Paria_Zandihamedani_CV.pdf" onClick={close}>
            Download CV
          </a>
        </li>
      </ul>
    </details>
  );
}
