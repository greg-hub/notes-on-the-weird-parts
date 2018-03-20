// Here will be working with array.filter/map/sort and reduce. These are the gateway methods to functional programming.
  // here with have some data we can work with.
  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',
                  'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
                  'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
                  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
                  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
                  'Benson, Leana','Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
                  'Bergman, Ingmar', 'Berio, Luciano','Berle, Milton', 'Berlin, Irving',
                  'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
                  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
                  'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine',
                  'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
 // ##Array.prototype.filter()
  // Task - filter the list of inventors for those who were born in the 1500's.

    const fifften = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
        //the way the filter works is you pass it a function and that function loops over every single item in our array. That wil give us the inventor and we
        // can decide if we want to keep it or not.
      console.table(fifften);
      // |0 "Galileo" "Galilei"1564-1642| |1 "Johannes" "Kepler" 1571-1630|

//##  Array.prototype.map()
  // Task - Give us an array of the inventors' first and last names
    //array.map takes in a array, does something with that array then retunr a new array but of the same length.
 

