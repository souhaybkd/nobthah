// SkillHelper.js
const getSkillLevel = (rating) => {
    // Round the rating to the nearest integer
    const roundedRating = Math.round(rating);

    switch (roundedRating) {
        case 0:
        case 1:
            return "Beginner";
        case 2:
            return "Intermediate";
        case 3:
            return "Advanced";
        case 4:
        case 5:
            return "Expert";
        default:
            return "";
    }
};

export default getSkillLevel;
