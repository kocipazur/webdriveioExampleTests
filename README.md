W ramach środowiska testowego potrzebujemy:
zainstalowane Node.js i Java (przynajmniej w wersji 1.8),
plik selenium-server-standalone-3.0.1.jar,
webdriverio z repozytorium npm,
(dla firefox) sterownik geckodriver i wskazanie na jego lokację
w zmiennej środowiskowej,
oczywiście przeglądarka - w tym wypadku firefox.

Uruchomienie testów odbywa się przez:
uruchomienie serwera selenium,
uruchomienie /node_modules/.bin/wdio z plikiem wdio.conf.js
zawartym w repozytorium jako parametrem.


Testy napisałem pod debianem z katalogiem node_modules, plikiem
geckodriver i serwerem selenium w katalogu głównym testów.
W repozytorium znajduje się skrypt uruchomieniowy, którego używałem.
