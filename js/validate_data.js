const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFilePath, 'utf8');

// Replace "const " so they become properties of the sandbox
content = content.replace(/const CHAPTERS_DATA/g, 'CHAPTERS_DATA');
content = content.replace(/const TIMELINE_DATA/g, 'TIMELINE_DATA');
content = content.replace(/const CONCEPT_MAP_DATA/g, 'CONCEPT_MAP_DATA');

const vm = require('vm');
const sandbox = {};
const context = vm.createContext(sandbox);
vm.runInContext(content, context);

const { CHAPTERS_DATA } = sandbox;

if (!CHAPTERS_DATA) {
    console.error("CHAPTERS_DATA not found in data.js");
    process.exit(1);
}

console.log(`Loaded ${CHAPTERS_DATA.length} chapters.`);
let hasError = false;

CHAPTERS_DATA.forEach((chapter, i) => {
    const chNum = chapter.id;
    console.log(`\nChecking Chapter ${chNum}: ${chapter.title}`);
    
    // Check objectives: 3 fields (knowledge, skills, attitude)
    const objKeys = Object.keys(chapter.objectives || {});
    const has3Objectives = objKeys.includes('knowledge') && objKeys.includes('skills') && objKeys.includes('attitude');
    if (!has3Objectives) {
        console.error(`  [ERROR] Chapter ${chNum} does not have exactly 3 objectives (knowledge, skills, attitude). Found keys:`, objKeys);
        hasError = true;
    } else {
        console.log(`  [OK] Objectives present (knowledge, skills, attitude)`);
    }

    // Check sections: 3 sections
    const secCount = (chapter.sections || []).length;
    if (secCount !== 3) {
        console.error(`  [ERROR] Chapter ${chNum} has ${secCount} sections instead of 3.`);
        hasError = true;
    } else {
        console.log(`  [OK] Has exactly 3 sections`);
        chapter.sections.forEach((sec, idx) => {
            if (!sec.title || !sec.summary || !sec.keyPoints || !sec.takeaway) {
                console.error(`    [ERROR] Chapter ${chNum} Section ${idx+1} is missing fields:`, sec);
                hasError = true;
            }
        });
    }

    // Check glossary terms: 5 terms
    const termCount = (chapter.keyTerms || []).length;
    if (termCount !== 5) {
        console.error(`  [ERROR] Chapter ${chNum} has ${termCount} key terms instead of 5.`);
        hasError = true;
    } else {
        console.log(`  [OK] Has exactly 5 terms`);
        chapter.keyTerms.forEach((term, idx) => {
            if (!term.term || !term.definition || !term.memoryHint) {
                console.error(`    [ERROR] Chapter ${chNum} Term ${idx+1} is missing fields:`, term);
                hasError = true;
            }
        });
    }

    // Check essay questions: 3 questions
    const essayCount = (chapter.essayQuestions || []).length;
    if (essayCount !== 3) {
        console.error(`  [ERROR] Chapter ${chNum} has ${essayCount} essay questions instead of 3.`);
        hasError = true;
    } else {
        console.log(`  [OK] Has exactly 3 essay questions`);
    }

    // Check quizzes: 5 questions
    const quizCount = (chapter.quizzes || []).length;
    if (quizCount !== 5) {
        console.error(`  [ERROR] Chapter ${chNum} has ${quizCount} quiz questions instead of 5.`);
        hasError = true;
    } else {
        console.log(`  [OK] Has exactly 5 quiz questions`);
        chapter.quizzes.forEach((quiz, idx) => {
            if (quiz.correctAnswer === undefined || !quiz.question || !quiz.options || quiz.options.length !== 4 || !quiz.explanation) {
                console.error(`    [ERROR] Chapter ${chNum} Quiz ${idx+1} is invalid or has wrong options count.`, quiz);
                hasError = true;
            }
        });
    }

    // Check Vietnam connection: 1 field
    if (!chapter.vietnamConnection) {
        console.error(`  [ERROR] Chapter ${chNum} is missing vietnamConnection.`);
        hasError = true;
    } else {
        console.log(`  [OK] Has Vietnam connection`);
    }

    // Check exam tips: 5 tips
    const tipsCount = (chapter.examTips || []).length;
    if (tipsCount !== 5) {
        console.error(`  [ERROR] Chapter ${chNum} has ${tipsCount} exam tips instead of 5.`);
        hasError = true;
    } else {
        console.log(`  [OK] Has exactly 5 exam tips`);
    }
});

if (hasError) {
    console.log("\nValidation FAILED!");
    process.exit(1);
} else {
    console.log("\nValidation PASSED successfully!");
    process.exit(0);
}
