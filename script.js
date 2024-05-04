const students = [
  {
    name: "Grace",
    gradeFirstTest: 8,
    gradeSecondTest: 9,
  },
  {
    name: "Jennifer",
    gradeFirstTest: 6,
    gradeSecondTest: 7,
  },
  {
    name: "Paul",
    gradeFirstTest: 4,
    gradeSecondTest: 5,
  },
  {
    name: "John",
    gradeFirstTest: 7,
    gradeSecondTest: 10,
  },
];

const calculateAverage = (gradeFirstTest, gradeSecondTest) => {
  return ((gradeFirstTest + gradeSecondTest) / 2).toFixed(2);
};
for (let student of students) {
  const average = calculateAverage(
    student.gradeFirstTest,
    student.gradeSecondTest
  );
  if (average >= 7) {
    alert(
      `A média do estudante ${student.name} é ${average}.\nParabéns, você foi aprovado! 🎉`
    );
  } else {
    alert(
      `A média do estudante ${student.name} é ${average}.\nInfelizmente você foi reprovado 😔. Tente novamente no próximo concurso`
    );
  }
}
