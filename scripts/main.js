const teachers = [
    {
        name: "Marieke",
        email: "m.devries@novi.nl"
    },
    {
        name: "Hannah",
        email: "h.wilda@novi.nl"
    },
    {
        name: "Robin",
        email: "r.abhuizen@novi.nl"
    },
    {
        name: "Said",
        email: "s.harachi@novi.nl"
    },
    {
        name: "Robert",
        email: "r.janssen@novi.nl"
    }
];

// 1. Sla de opgegeven naam op
const searchInput = "Robert";


// 2. Check voor iedere docent het volgende:
//    - komt de naam van de docent die we nu bekijken overeen met de ingegeven naam
//      - Zo nee: print "Nope.." en ga verder naar de volgende docent
//      - Zo ja:  print het bijhorende e-mailadres van de docent
function searchEmail() {
    for (i = 0; i < teachers.length; i++) {
        if (teachers[i].name === searchInput) {
            console.log(teachers[i].email);
        }else {
            console.log("Nope..");
        }
    }

}

searchEmail(searchInput);
searchEmail("Said");


// Refactor code
function searchEmail(employee, nameOfEmployee) {
    for (let i = 0; i < employee.length; i++) {
        if (
            employee[i].name &&
            employee[i].name.toLowerCase().includes(nameOfEmployee.toLowerCase())
        ) {
            return employee[i].email;
        }
    }

    console.log("No employee found");
    return null;
}

console.log(searchEmail(teachers, "Marieke"));
