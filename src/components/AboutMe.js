import React from "react";
import "../scss/_about-me.scss";

export const AboutMe = () => {
  return (
    <section className="about-me">
      <p className="vertical-name">Próżny Typ</p>

      <div className="about-text">
        <p>
          Próżny Typ to projekt warszawskiego muzyka, wokalisty i producenta
          Tomasza Gołębiewskiego. Próżny jest przedstawicielem alternatywnej
          sceny w Polsce. Jego muzyczne inspiracje są głęboko zakorzenione w
          muzyce ciężkiej, z której się wywodzi. Obecnie jednak jego krąg
          zainteresowań mocno skręcił w stronę muzyki popowej, synth-pop oraz
          muzyki alternatywnej, okraszonej dużą dawką elektroniki.
        </p>
        <br />
        <p>
          Tomasz Gołębiewski jest multiinstrumentalistą, posługującym się
          licznym asortymentem instrumentów strunowych, klawiszowych czy
          perkusyjnych. Ponadto śpiewa, pisze teksty, komponuje i produkuje
          wszystkie swoje utwory. Studiem nagraniowym projektu Próżny Typ jest
          prywatne mieszkanie Tomka, w którym zgromadził pokaźny arsenał sprzętu
          muzycznego i instrumentów.
        </p>
        <br />
        <p>Autorką okładek i teledysków jest Julia Stolarska.</p>
      </div>
    </section>
  );
};
