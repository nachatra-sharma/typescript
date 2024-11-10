type Kid = {
  firstName: string;
  lastName: string;
  age: number;
};

// unions

type idStrNum = number | string;

function printDetails(id: idStrNum) {
  console.log(id);
}

printDetails("37763423");
printDetails(4876437843);

// intersection

type Employe = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employe & Manager;

const teamLead: TeamLead = {
  name: "Harkirat Singh",
  startDate: new Date(),
  department: "Software Developer",
};
