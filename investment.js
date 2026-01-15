// alert("hdgdgdgdgg")


const plans = {
    basic: {
        name: "Basic Plan",
        profit: "2% Daily",
        min: "$100",
        max: "$999",
        duration: "7 Days"
    },
    silver: {
        name: "Silver Plan",
        profit: "3% Daily",
        min: "$100",
        max: "$2,999",
        duration: "14 Days"
    },
    gold: {
        name: "Gold Plan",
        profit: "5% Daily",
        min: "$3,000",
        max: "$9,999",
        duration: "21 Days"
    },
    diamond: {
        name: "Diamond Plan",
        profit: "8% Daily",
        min: "$10,000",
        max: "$50,000",
        duration: "30 Days"
    }
};

const select = document.getElementById("planSelect");

select.addEventListener("change", () => {
    const plan = plans[select.value];
    document.getElementById("planName").innerText = plan.name;
    document.getElementById("profit").innerText = plan.profit;
    document.getElementById("min").innerText = plan.min;
    document.getElementById("max").innerText = plan.max;
    document.getElementById("duration").innerText = plan.duration;
});