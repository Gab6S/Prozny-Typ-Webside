import React from "react";
import "../scss/_music.scss";
import { SpotifyPlayer } from "./SpotifyPlayer";
import photoFour from "../assets/Potomek.jpg";
import photoTwo from "../assets/Pozwolisz.jpg";
import photoOne from "../assets/Niewiele.jpg";
import photoThree from "../assets/Wyszukane.jpg";

export const Music = () => {
  const goToFirstSingle = () => {
    window.location.href =
      "https://open.spotify.com/track/6cwdCQdAVCVDLMQs6jtNh7?si=775f9b77d5a74915";
  };

  const goToSecondSingle = () => {
    window.location.href =
      "https://open.spotify.com/track/1EDnx9kHxTeqzzuMc7mMPm?si=7dbfb0ac6d4141a0";
  };

  const goToThirdSingle = () => {
    window.location.href =
      "https://open.spotify.com/track/4GFP7gpcg4JkYNZM0NzW2A?si=c1b98edfcff84f14";
  };

  const goToFourthSingle = () => {
    window.location.href =
      "https://open.spotify.com/track/2gpmwjnCcJrhDx2ONKRZnz?si=6f3a677116734081";
  };

  return (
    <section className="music-section">
      <p className="title title-one">Próżny Typ - "Tak niewiele się stało"</p>
      <div className="section">
        <div className="image">
          <img
            id="one"
            src={photoOne}
            alt="naked lady"
            onClick={goToFirstSingle}
          ></img>
        </div>
        <div className="about-single">
          <p className="about-single-text">
            „Tak niewiele się stało”, wcześniej nazywany po prostu „bluesem”
            wymyśliłem na gitarze akustycznej ponad 3 lata temu. Był
            modyfikowany wielokrotnie oraz grany w mojej poprzedniej kapeli.
            Niestety prace nad nim zakończyły się na graniu prób. Po założeniu
            projektu „Próżny Typ” stwierdziłem, że pomimo odmiennej stylistyki
            chce wydać ten numer. Odezwałem się do znajomego muzyka Piotrka
            Gierlachowskiego, z którym grałem w poprzednich kapelach, o pomoc w
            aranżacji bębnów oraz skonstruowanie drugiej gitary do mojego
            aranżu. Do składu doszedł Rafał Zduniak - znajomy basista. Wspólnie
            po ponad dwóch miesiącach prac zgłosiliśmy gotowość do nagrania
            utworu w studiu. Utwór opowiada o „brudnej”, zakazanej miłości
            która, patrząc przez pryzmat społeczeństwa, nie powinna się
            wydarzyć. Nie brakuje tematu uwodzenia i balansowania na krawędzi
            moralności.{" "}
          </p>
          <br />
          <p className="about-single-text">
            Jest to jedyna piosenka w projekcie, która w całości jest zagrana na
            żywych instrumentach. Skomponowany przeze mnie utwór został
            zarejestrowany w Nebula Studio. Miks i mastering wykonał Maciej
            Karbowski z Nebula Studio.
          </p>
        </div>
      </div>
      <p className="title title-two">
        Próżny Typ - "Pozwolisz? Niech opadnie kurz."
      </p>
      <div className="section section-two">
        <img
          id="two"
          src={photoTwo}
          alt="man with match"
          onClick={goToSecondSingle}
        ></img>
        <div className="about-single">
          <p className="about-single-text">
            „Pozwolisz? Niech opadnie kurz.” jest wyjątkowym utworem w projekcie
            Próżnego. Utwór powstawał w momencie, gdy wraz ze znajomą
            wokalistką/producentką przygotowywaliśmy się do koncertu.
            Potrzebowałem świeżego materiału, aby zapełnić listę utworów. Baza
            całego utworu powstała podczas jednej burzy, gdzie natchniony
            zjawiskiem atmosferycznym zabrałem się do pracy. Piosenkę miałem
            wykonywać sam. Po napisaniu tekstu stwierdziłem, że potrzebuje do
            realizacji kobiecego głosu. Tekst jak i brzmienie miał przynosić
            nadzieję i pokazać, że warto mieć w sobie trochę pokory by docenić
            otaczający nas świat. Chciałem pokazać, że po czasie, gdy krok po
            kroku dążymy do celu, znikają nasze udręki a pojawiają się nowe
            możliwości. Aby intencja tekstu zgadzała się z brzmieniem,
            zaprosiłem do współpracy Sophie by zrobiła ciepłe tło swoim głosem
            tak, aby budować jeszcze większą nadzieję i poczucie ulgi.
          </p>
          <br />
          <p className="about-single-text">
            Cały podkład stworzyłem w domu. Wokale, miks i mastering
            zrealizowaliśmy u Marcina Staniszewskiego (Color My Sound).
          </p>
        </div>
      </div>
      <p className="title title-three">Próżny Typ - "Szczerze wyszukane"</p>
      <div className="section">
        <img
          id="three"
          src={photoThree}
          alt="hand"
          onClick={goToThirdSingle}
        ></img>
        <div className="about-single">
          <p className="about-single-text">
            „Szczerze wyszukane” nawiązuje klimatem do pierwszego singla
            „Potomek”, natomiast wkracza w inną tematykę. Znacznie spokojniej,
            nadal mrocznie, opisywany jest problem szeroko pojętego zła. Kto je
            definiuje - społeczeństwo, religia, kultura? Gdzie są granice
            pomiędzy tym co dobre a co złe oraz jaki wpływ wywiera na człowieka
            „dobro”, które nie jest uniwersalne, a jedynie zależy od perspektywy
            danej osoby - to wszystko starałem się opisać patrząc ze swojej
            perspektywy.{" "}
          </p>
          <br />
          <p className="about-single-text">
            Cały utwór stworzyłem w domu, jest w pełni elektroniczny, chociaż
            partie perkusyjne w całości zostały nagrane na syntezatorze Nord
            Drum 3P - taka elektronika pomieszana z klasycznym uderzaniem
            pałkami ;). Miksem i masteringiem zajął się Marcin Staniszewski
            (Color My Sound).
          </p>
        </div>
      </div>
      <p className="title title-four">Próżny Typ - "Potomek" </p>
      <div className="section section-four">
        <img
          id="four"
          src={photoFour}
          alt="man with baloon"
          onClick={goToFourthSingle}
        ></img>
        <div className="about-single">
          <p className="about-single-text">
            „Potomek” był pierwszym singlem z projektu Próżny Typ. Trzy lata
            temu utwór powstał w całości lecz odrzuciłem jego główny moduł
            pozostawiając tylko wstęp. Wraz ze startem Próżnego na początku 2020
            roku powróciłem do dalszych prac. Założyłem, że początkowo opowiem o
            cięższych tematach. Utworem oraz teledyskiem chciałem przedstawić
            obraz emocji oraz „głosów” jakie na codzień nami kierują. Głosy
            kompleksów, ambicji, marzeń, niezadowolenia, braku akceptacji stanu
            rzeczy jaki nas otacza czy ból związany z dzieciństwem, doskwierają
            dużej części społeczeństwa. Emocje jakie wywołują bywają ciężkie do
            zniesienia i często prowadzą do zgubnych decyzji które ciężko potem
            naprawić. Utwór miał wprowadzać w stan zaniepokojenia a może nawet
            strachu po to, by każdy mógł się przekonać na własnej skórze, z czym
            niektórzy z nas muszą zmagać się na codzień. Wbrew pozorom piosenka
            ma zachęcić słuchacza do rozmyśleń prowadzących w kierunku empatii,
            pomocy ludziom którzy mają problemy z emocjonalnością, a dla
            niektórych formą ulgi, że nie są w tych odczuciach samotni - pomimo
            mrocznej oraz ironicznej konstrukcji.
          </p>{" "}
          <br />
          <p className="about-single-text">
            Cały utwór stworzyłem w domu, miksem i masteringiem zajął się Marcin
            Staniszewski (Color My Sound).
          </p>
        </div>
      </div>
    </section>
  );
};
