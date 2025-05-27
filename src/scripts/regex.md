"Believe you can and you're halfway there.",
"You are stronger than you think.",
"Every day is a new beginning.",
"Difficult roads often lead to beautiful destinations.",
"You are capable of amazing things.",
"Don’t watch the clock; do what it does. Keep going.",
"Success is not for the lazy.",
"Dream big and dare to fail.",
"Your only limit is your mind.",
"Push yourself, because no one else is going to do it for you.",
"Great things never come from comfort zones.",
"Stay positive, work hard, make it happen.",
"You don’t have to be perfect to be amazing.",
"The best way to get started is to quit talking and begin doing.",
"Doubt kills more dreams than failure ever will.",
"You are your only limit.",
"Start where you are. Use what you have. Do what you can.",
"The harder you work for something, the greater you’ll feel when you achieve it.",
"Don’t stop until you’re proud.",
"Difficult doesn’t mean impossible.",
"You can do anything you set your mind to.",
"Small steps every day.",
"It always seems impossible until it’s done.",
"You are enough just as you are.",
"Mistakes are proof that you are trying.",
"Don’t be afraid to start over. It’s a chance to build something better.",
"You’ve got this.",
"Be the energy you want to attract.",
"The only way to do great work is to love what you do.",
"If you believe in yourself, anything is possible.",
"Your potential is endless.",
"Keep going. Everything you need will come to you.",
"You are braver than you believe, stronger than you seem, and smarter than you think.",
"Don’t give up. Great things take time.",
"You are the author of your own story.",
"Dare to be different.",
"You are unstoppable.",
"The best view comes after the hardest climb.",
"You are worthy of all the good things in life.",
"Stay focused and never give up.",
"You can and you will.",
"Turn your dreams into plans.",
"Be fearless in the pursuit of what sets your soul on fire.",
"Your future is created by what you do today, not tomorrow.",
"Don’t limit your challenges. Challenge your limits.",
"You are destined for greatness.",
"Rise above the storm and you will find the sunshine.",
"You are a work in progress, and that’s okay.",
"Keep your face always toward the sunshine—and shadows will fall behind you.",
"You are capable of more than you know.",


we want to replace 
"Believe you can and you're halfway there.",
with 
{ "quote": "Believe you can and you're halfway there." }

we want to store the quote in a variable using ()
when we replace it, we use $1 to read that variable

(.*) means put everything in $1
(.*),\n means put everything before a comma and newline in $1

we want to replace each quote with { "quote": the original line }, \n
"the original line" being $1

{ "quote": $1 }, \n