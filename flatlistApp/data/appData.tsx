/*
this file will include our dataTypes used across multiple files
can also declare arrays + other variables here 
*/
type dataType = {
  id: string; //unique identifier for each element in list (ex: student ID)
  title: string; //what is displayed (ex: Kay Shidle)
};

const DATA: dataType[] = [
  { id: "1", title: "First" },
  { id: "2", title: "Second" },
  { id: "3", title: "Third" },
  { id: "4", title: "Fourth" },
];
