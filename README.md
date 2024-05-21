# Rentalvergleichs-Plattform

## Motivation

Die Anzahl der Rental-Plattformen wächst stetig, was die Suche nach dem passenden Anbieter für die eigenen Bedürfnisse erschwert. Eine Applikation, die den Suchenden mit einer Vergleichsanalyse hilft, den idealen Rental-Provider zu finden, kann hier Abhilfe schaffen.

## Zielsetzung

Ziel dieser Arbeit ist die Entwicklung einer Web-Applikation, die es Nutzern ermöglicht, ihre spezifischen Anforderungen an einen Rental-Anbieter anzugeben und so eine auf ihre Bedürfnisse zugeschnittene Auswahl an Anbietern zu erhalten.

## Technische Umsetzung

Die Applikation wurde mit Next.js im Front-End und mit Supabase im Back-End realisiert. Diese Kombination bietet eine robuste Lösung, die eine reichhaltige und zeitgerechte Benutzererfahrung ermöglicht.

## Funktionalität

Die Applikation bietet folgende Funktionen:

- Eingabe der Suchkriterien: Benutzer können verschiedene Kriterien wie Preis, Ausstattung, Verfügbarkeit und Bewertungen angeben.
Gewichtung der Kriterien: Die Benutzer können festlegen, welche Kriterien ihnen am wichtigsten sind.
- Vergleichsanalyse: Die Applikation führt eine Nutzwertanalyse der verschiedenen Rental-Anbieter durch und berechnet eine   Gesamtpunktzahl für jeden Anbieter.
- Ergebnisse: Die Anbieter werden nach der Gesamtpunktzahl sortiert und dem Benutzer angezeigt.
- Detailinformationen: Der Benutzer kann detaillierte Informationen zu jedem Anbieter einsehen.

## Zusammenfassung

Die entwickelte Web-Applikation bietet eine nutzerfreundliche und effiziente Möglichkeit, den passenden Rental-Anbieter zu finden. Die Nutzwertanalyse ermöglicht eine objektive Bewertung der verschiedenen Anbieter und die Berücksichtigung der individuellen Bedürfnisse des Benutzers.

---

## Anwendung ausführen

Die Anwendung wurde auf Vercel deployed und kann somit online ausgeführt werden. 
Folgender Link führt direkt zur deployten Anwendung: https://rental-comparsion-1.vercel.app/

## Lokal ausführen

Um die Applikation lokal zu testen zu können, müssen folgende Schritte ausgeführt werden:

1. ```git clone https://github.com/harveyspecter93/rental-comparsion```
2. Download node.js (Version > 18)
3. ```npm install```
5. ```npm run dev```-> Das Projekt wird unter localhost:3000 erreichbar sein.

> WICHTIG! Die Supabase-Credentials werden im .env-File angegeben. Diese Datei muss nach dem Klonen selbst angelegt werden. 
> Bei Interesse kann man die Credentials bei mir anfragen: mike.draeyer@gmail.com