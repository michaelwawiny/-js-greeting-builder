// Function 1: Format full name
function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


// Function 2: Generate greeting
function getGreeting(timeOfDay) {

    if (timeOfDay === "morning") {
        return "Good morning";
    }

    else if (timeOfDay === "afternoon") {
        return "Good afternoon";
    }

    else if (timeOfDay === "evening") {
        return "Good evening";
    }

    else {
        return "Hello";
    }
}


// Function 3: Create complete greeting
function createGreeting(firstName, lastName, timeOfDay) {

    const name = formatName(firstName, lastName);
    const greeting = getGreeting(timeOfDay);

    return `${greeting}, ${name}`;
}


// Test the functions
console.log(createGreeting("Ava", "Stone", "morning"));
console.log(createGreeting("Noah", "Kim", "evening"));
console.log(createGreeting("Mina", "Patel", "afternoon"));