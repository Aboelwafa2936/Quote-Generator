
    var quoteList = [
    {
        name: "Franklin D. Roosevelt",
        quote: "The only thing we have to fear is fear itself.",
    },
    {
        name: " Ralph Waldo Emerson",
        quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    },
    {
        name: "Albert Einstein",
        quote:
        "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
    },
    {
        name: "Martin Luther King Jr",
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    },
    {
        name: "Wayne Gretzky",
        quote: "You miss 100% of the shots you don't take." ,
    },
    {
        name: "Peter Drucker",
        quote:"The best way to predict the future is to create it.",
    },
    ];

    var quoteStructure = "";

    function generateQuotes() {

        // Reset the quoteList if all quotes have been used
        if (quoteList.length == 0) {
            quoteList = [
                {
                name: "Franklin D. Roosevelt",
                quote: "The only thing we have to fear is fear itself.",
                },
                {
                name: " Ralph Waldo Emerson",
                quote:
                    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
                },
                {
                name: "Albert Einstein",
                quote:
                    "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
                },
                {
                    name: "Martin Luther King Jr",
                    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
                },
                {
                    name: "Wayne Gretzky",
                    quote: "You miss 100% of the shots you don't take." ,
                },
                {
                    name: "Peter Drucker",
                    quote:"The best way to predict the future is to create it.",
                }
            ];
        }

        // Generate a random number
        var randomIndex = Math.floor(Math.random() * quoteList.length);

        // Getting the narrator and his Quote using that random number 
        var randomQuote = quoteList[randomIndex].quote;
        var randomQuoteName = quoteList[randomIndex].name;

        // Remove the selected quote and narrator from the quoteList array
        quoteList.splice(randomIndex,1);
        
        //Create the HTML structure with the quote and narrator's name
        quoteStructure = 
            `
            <h3>"${randomQuote}"</h3>
            <h4>--${randomQuoteName}</h4>`;

        document.getElementById("quoteContainer").innerHTML = quoteStructure;
    }