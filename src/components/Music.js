import React from "react";
import "../scss/_music.scss";
import { SpotifyPlayer } from "./SpotifyPlayer";
import photoOne from "../assets/Potomek.jpg";
import photoThree from "../assets/Pozwolisz.jpg";
import photoFour from "../assets/Niewiele.jpg";
import photoTwo from "../assets/Wyszukane.jpg";

export const Music = () => {
  return (
    <section className="music-section">
      <div className="section">
        <img src={photoOne} alt="man with baloon"></img>
        <div className="about-single">
          <p>Próżny Typ - Potomek </p>
          <br />
          <p>
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
          <p>
            Cały utwór stworzyłem w domu, miksem i masteringiem zajął się Marcin
            Staniszewski (Color My Sound).
          </p>
        </div>
      </div>
      <div className="section section-two">
        <img src={photoTwo} alt="hand"></img>
        <div className="about-single">
          <p>Próżny Typ - Szczerze wyszukane</p>
          <br />
          <p>
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
          <p>
            Cały utwór stworzyłem w domu, jest w pełni elektroniczny, chociaż
            partie perkusyjne w całości zostały nagrane na syntezatorze Nord
            Drum 3P - taka elektronika pomieszana z klasycznym uderzaniem
            pałkami ;). Miksem i masteringiem zajął się Marcin Staniszewski
            (Color My Sound).
          </p>
        </div>
      </div>
      <div className="section">
        <img src={photoThree} alt="man with match"></img>
        <div className="about-single">
          <p>Próżny Typ - Pozwolisz? Niech opadnie kurz.</p>
          <br />
          <p>
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
          <p>
            Cały podkład stworzyłem w domu. Wokale, miks i mastering
            zrealizowaliśmy u Marcina Staniszewskiego (Color My Sound).
          </p>
        </div>
      </div>
      <div className="section section-four">
        <img src={photoFour} alt="naked lady"></img>
        <div className="about-single">
          <p>Próżny Typ - Tak niewiele się stało</p>
          <br />
          <p>
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
          <p>
            Jest to jedyna piosenka w projekcie, która w całości jest zagrana na
            żywych instrumentach. Skomponowany przeze mnie utwór został
            zarejestrowany w Nebula Studio. Miks i mastering wykonał Maciej
            Karbowski z Nebula Studio.
          </p>
        </div>
      </div>
    </section>
  );
};
