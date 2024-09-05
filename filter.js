  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  // to filter people aged 21 or over
  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough);
  
  // to filter a name
  const filterName = people.filter(person => person.name === "Paul");
  console.log(filterName)
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

       // OPTION 1

       //filter student with at least 5 years experience in at least one skill
       // can be done this way bu it is hard to understand 

// const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >=5);
//     return strongSkills.length > 0
// })
// console.log(candidates)



        // OPTION 2

// const hasStrongSkills = student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >=5);
//     return strongSkills.length > 0;
// };
// const candidates = students.filter(hasStrongSkills)
// console.log(candidates)


      //OPTION 3


const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
console.log(candidates);

// It is easyer to read if you pass the callback function first and then pass it into the filter section 