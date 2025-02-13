var baseUrl = 'https://backend.objectiva.tech/api';
export const environment = {
    production: true,

    // BASE URL
    baseUrl: baseUrl,
    // USER
    userUrl: `${baseUrl}/user`,
    userUpdateUrl: `${baseUrl}/update`,
    // LOGIN & REGISTER
    loginUrl: `${baseUrl}/login`,
    registerUrl: `${baseUrl}/register`,

    // LESSON PROGRESS
    lessonProgressUrl: `${baseUrl}/lesson-progress`,

    // QUIZ
    quizUrl: `${baseUrl}/quiz-scores`,

    // ADMIN
    adminUserUrl: `${baseUrl}/admin/users`,
    // abstractionQuiz: `${baseUrl}/admin/abstraction-quizzes`,
    // encapsulationQuiz: `${baseUrl}/admin/encapsulation-quizzes`,
    // inheritanceQuiz: `${baseUrl}/admin/inheritance-quizzes`,
    // polymorphismQuiz: `${baseUrl}/admin/polymorphism-quizzes`,
    // introductionOopQuiz: `${baseUrl}/admin/introductionToOop-quizzes`,
    // introductionJavaQuiz: `${baseUrl}/admin/introductionToJava-quizzes`,
    quiz: `${baseUrl}/admin/quizzes`
};