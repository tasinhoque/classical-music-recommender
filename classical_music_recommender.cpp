#include<bits/stdc++.h>

using namespace std;

vector<string> piano = {
	"Piano Concerto in C minor by Mozart",
	"Piano Concerto no. 21 in C major by Mozart",
	"Piano Concerto no. 22 in E-flat major by Mozart",
	"Piano Concerto no. 24 in C minor by Mozart",
	"Piano Sonata in G major by Mozart",
	"Piano Sonata in F major by Mozart",
	"Piano Sonata in C major by Mozart",
	"Piano Sonata no. 14 in C-sharp minor (Moonlight) by Beethoven",
	"Piano Sonata no. 8 in C minor (Pathetique) by Beethoven",
	"Piano Sonata no. 23 in F minor (Appassionata) by Beethoven",
	"Sonata in F major for horn and piano by Beethoven",
	"Sonata for Violin and Piano no. 9 in A major (Kreutzer) by Beethoven",
	"Trio in B-flat major for Clarinet (or Violin), Cello, and Piano by Beethoven",
	"The Shepherd on the Rock, song cycle for soprano, clarinet, and piano by Schubert",
	"Piano Concerto no. 1 in G minor by Mendelssohn",
	"24 Preludes by Chopin",
	"Ballade no. 4 in F minor by Chopin",
	"Piano Concerto no. 1 in E minor by Chopin",
	"Piano Concerto no. 2 in F minor by Chopin",
	"Piano Concerto in A minor by Schumann",
	"Three Romances for oboe and piano by Schumann",
	"Adagio and allegro in A-flat major for horn and piano by Schumann",
	"Piano Concerto no. 2 in B-flat major by Brahms",
	"Sonata for Violin and Piano no. 1 in G major by Brahms",
	"Sonatas for clarinet and piano by Brahms",
	"Intermezzi for Piano by Brahms",
	"Hungarian Rhapsodies by Liszt",
	"Piano Sonata in B minor by Liszt",
	"Piano Concerto no. 1 in E-flat major by Liszt",
	"Piano Concerto in A minor by Grieg",
	"Piano Concerto no. 1 in B-flat minor by Tchaikovsky",
	"Piano Sonata no. 2 in B-flat minor by Rachmaninoff",
	"Clair de lune by Debussy",
	"Pavane for a Dead Princess by Ravel",
	"Piano Concerto no. 1 by Shostakovich",
	"Canon in D major by Pachelbel",
	"Introduction and Rondo Capriccioso"
};

vector<string> violin = {
	"The Four Seasons by Vivaldi",
	"Sonata for Two Violins by Vivaldi",
	"Concerto for Four Violins by Vivaldi",
	"Concerto for Two Violins in D minor by Bach",
	"Violin Concerto in G major by Haydn",
	"Violin Concerto no. 5 in A major (Turkish) by Mozart",
	"Sinfonia Concertante (concerto for violin and viola) in E-flat major by Mozart",
	"Violin Concerto in D major by Beethoven",
	"Sonata for Violin and Piano no. 9 in A major (Kreutzer) by Beethoven",
	"Trio in B-flat major for Clarinet (or Violin), Cello, and Piano by Beethoven",
	"String Quartets opus 59, no. 1-3 (the Razumovsky Quartets) by Beethoven",
	"Violin Concerto in E minor by Mendelssohn",
	"Octet for Strings in E-flat major by Mendelssohn",
	"Violin Concerto in D major by Brahms",
	"Sonata for Violin and Piano no. 1 in G major by Brahms",
	"Violin Concerto no. 1 in D major by Paganini",
	"Violin Concerto no. 2 in B minor by Paganini",
	"24 Caprices for Solo Violin by Paganini",
	"Romance for Violin and Orchestra in F minor by Dvorak",
	"Serenade for Strings in E major by Dvorak",
	"String Quartet no. 6 in F major (American) by Dvorak",
	"Violin Concerto in D major by Sibelius",
	"Violin Concerto in D major by Tchaikovsky",
	"String Quartets no. 3 by Shostakovich",
	"String Quartets no. 8 by Shostakovich",
	"Violin Concerto by Berg",
	"Violin Concerto no. 1 in G minor by Bruch",
	"Danse macabre by Saint-Saens",
	"Introduction and Rondo Capriccioso by Saint-Saens"
};

int main() {
    srand(time(0));
	string choice;

	cout << "Hit p for piano or v for violin music" << endl; 

    while(1) {
		cout << endl << "Your choice: ";
		cin >> choice;

		if (choice[0] == 'p') {
			cout << piano[rand() % piano.size()] << endl;
		} else {
			cout << violin[rand() % violin.size()] << endl;
		}
    }
}
