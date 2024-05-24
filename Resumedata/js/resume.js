const resume = {
    details: {
        name: "Gopinathan",
        fatherName: "Anandan",
        birthYear: 1996,
        Degree: "B.E",
        location: {
            address: "8/22 Pudupet road,7th street",
            place: "Tirupattur",
            state: "Tamilnadu",
            country: "India"
        }
    },
    contact: {
        mobile: 9944601260,
        gmail: "gopinathan.anandan@gmail.com"
    },
    education: {
        sslc: {
            name: "Velankanni matriculation higher secondary school",
            location: "Bargur",
            passingYear: 2012,
            percentage: 92
        },
        hsc: {
            name: "Sri vijay vidyalaya",
            location: "Dharmapuri",
            passingYear: 2014,
            percentage: 90
        },
        ug: {
            name: "Rajalakshmi Engineering College",
            location: "chennai",
            passingYear: 2018,
            department: "Mechanial",
            percentage: 77
        }
    },
    skill: ['excel', 'SQL', 'JavaScript'],
    work: {
        companyName: "Amazon",
        designation: "Associate",
        joiningDate: "2022-11-07",
        roleType: "Non-Tech",
        experienceInYaers: 2
    },
    language: ['Tamil', 'English', 'Telugu']
}

console.log(resume);

// for loop:

for (let i = 0; i < resume.skill.length; i++) {
    console.log(resume.skill[i]);
}

for (let i = 0; i < resume.language.length; i++) {
    console.log(resume.language[i]);
}

//for in loop:

for (const key in resume) {
    console.log(key, resume[key]);
}

//for of loop:

for (let value of Object.values(resume)) {
    console.log(value);
}

//forEach loop:

resume.skill.forEach(skill => {
    console.log(skill);
});

resume.language.forEach(language => {
    console.log(language);
});

