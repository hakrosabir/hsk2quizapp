const quizContainer = document.querySelector('.quiz-container');
const btnContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const showResultButton = document.getElementById('show-result-btn');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  { question: 'ba mp. used at the end of a sentence to express speculative interrogation', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 0 },
  { question: 'ba mp. used at the end of an imperative sentence', answers: ['Agree', 'Disagree', 'Follow', 'Ignore'], correctIndex: 1 },
  { question: 'bái adj. ', answers: ['Red', 'Blue', 'Green', 'White'], correctIndex: 3 },
  { question: 'bǎi num.', answers: ['Ten', 'Fifty', 'One Hundred', 'Two Hundred'], correctIndex: 2 },
  { question: 'bāngzhù v.', answers: ['Help; assist; aid; support', 'Obstruct', 'Ignore', 'Avoid'], correctIndex: 0 },
  { question: 'bàozhǐ n.', answers: ['Magazine', 'Book', 'Newspaper', 'Brochure'], correctIndex: 2 },
  { question: 'bǐ prep. used to make comparison', answers: ['Addition', 'Subtraction', 'Comparison', 'Multiplication'], correctIndex: 2 },
  { question: 'bié adv. don’t', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 1 },
  { question: 'cháng adj. ', answers: ['Short', 'Medium', 'Long', 'Very Long'], correctIndex: 2 },
  { question: 'chànggē v.', answers: ['Speak', 'Dance', 'Sing', 'Play'], correctIndex: 2 },
  { question: 'chū v. ', answers: ['Enter', 'Exit; go out', 'Stay', 'Move'], correctIndex: 1 },
  { question: 'chuān v. ', answers: ['Remove', 'Wear; put on', 'Hold', 'Drop'], correctIndex: 1 },
  { question: 'cì nm./vm. number of times', answers: ['Once', 'Twice', 'Thrice', 'Four Times'], correctIndex: 2 },
  { question: 'cóng prep. ', answers: ['To', 'from; since', 'Between', 'Among'], correctIndex: 1 },
  { question: 'cuò adj. ', answers: ['Correct', 'Incorrect', 'Right', 'Left'], correctIndex: 1 },
  { question: 'dǎ lánqiú ', answers: ['Play Soccer', 'Play Basketball', 'Swim', 'Run'], correctIndex: 1 },
  { question: 'dàjiā pron.', answers: ['Some', 'None', 'everyone; everybody', 'Few'], correctIndex: 2 },
  { question: 'dào v.', answers: ['Depart', 'arrive; reach', 'Travel', 'Stop'], correctIndex: 1 },
  { question: 'de sa. marker of complement', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 0 },
  { question: 'děng v.', answers: ['Wait', 'Leave', 'Stay', 'Hurry'], correctIndex: 0 },
  { question: 'dìdi n.', answers: ['Older Brother', 'Younger Brother', 'Sister', 'Cousin'], correctIndex: 1 },
  { question: 'dì-yī num.', answers: ['First', 'Second', 'Third', 'Fourth'], correctIndex: 0 },
  { question: 'dǒng v. ', answers: ['Understand', 'Confuse', 'Misunderstand', 'Ignore'], correctIndex: 0 },
  { question: 'duì adj. ', answers: ['Right', 'Wrong', 'Correct', 'Incorrect'], correctIndex: 2 },
  { question: 'duì prep. ', answers: ['To', 'From', 'to; towards', 'Away'], correctIndex: 2 },
  { question: 'fángjiān n. ', answers: ['Living Room', 'Bedroom', 'Kitchen', 'Room'], correctIndex: 3 },
  { question: 'fēicháng adv.', answers: ['Not Very', 'Somewhat', 'Very', 'Extremely'], correctIndex: 2 },
  { question: 'fúwùyuán n. ', answers: ['Customer', 'waiter; waitress', 'Manager', 'Owner'], correctIndex: 1 },
  { question: 'gāo adj.', answers: ['Short', 'Average', 'tall; high', 'Very Tall'], correctIndex: 2 },
  { question: 'gàosu v.', answers: ['Ask', 'Tell', 'Answer', 'Ignore'], correctIndex: 1 },
  { question: 'gēge n.', answers: ['Elder Sister', 'Younger Sister', 'Elder Brother', 'Younger Brother'], correctIndex: 2 },
  { question: 'gěi v. ', answers: ['Take', 'Give, hand over', 'Receive', 'Reject'], correctIndex: 1 },
  { question: 'gōnggòngqìchē n.', answers: ['Car', 'Bus', 'Bicycle', 'Train'], correctIndex: 1 },
  { question: 'gōngsī n.', answers: ['School', 'company; firm', 'Hospital', 'Factory'], correctIndex: 1 },
  { question: 'gǒu n. ', answers: ['Cat', 'Dog', 'Bird', 'Fish'], correctIndex: 1 },
  { question: 'guì adj.', answers: ['Cheap', 'Affordable', 'expensive; costly', 'Luxurious'], correctIndex: 2 },
  { question: 'guo sa. used after a verb, referring to sth. that happened previously', answers: ['Now', 'Before', 'After', 'During'], correctIndex: 1 },
  { question: 'hái adv.', answers: ['Already', 'Not Yet', 'still; yet', 'Finished'], correctIndex: 2 },
  { question: 'háizi n.', answers: ['Son', 'Daughter', 'Child, son or daughter', 'Sibling'], correctIndex: 2 },
  { question: 'hǎochī ', answers: ['Delicious', 'Tasty', 'Bland', 'Spicy'], correctIndex: 0 },
  { question: 'hēi adj.', answers: ['White', 'black; dark', 'Gray', 'Dark'], correctIndex: 1 },
  { question: 'hóng adj. ', answers: ['Blue', 'Green', 'Yellow', 'Red'], correctIndex: 3 },
  { question: 'huānyíng v.', answers: ['Welcome', 'Goodbye', 'Hello', 'Farewell'], correctIndex: 0 },
  { question: 'huídá v.', answers: ['Ask', 'Ignore', 'Respond', 'Answer'], correctIndex: 3 },
  { question: 'huǒchēzhàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 0 },
  { question: 'jīchǎng', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 1 },
  { question: 'jīdàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 2 },
  { question: 'jiàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 3 },
  { question: 'ba mp. used at the end of a sentence to express speculative interrogation', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 0 },
  { question: 'ba mp. used at the end of an imperative sentence', answers: ['Agree', 'Disagree', 'Follow', 'Ignore'], correctIndex: 1 },
  { question: 'bái adj. ', answers: ['Red', 'Blue', 'Green', 'White'], correctIndex: 3 },
  { question: 'bǎi num.', answers: ['Ten', 'Fifty', 'One Hundred', 'Two Hundred'], correctIndex: 2 },
  { question: 'bāngzhù v.', answers: ['Help; assist; aid; support', 'Obstruct', 'Ignore', 'Avoid'], correctIndex: 0 },
  { question: 'bàozhǐ n.', answers: ['Magazine', 'Book', 'Newspaper', 'Brochure'], correctIndex: 2 },
  { question: 'bǐ prep. used to make comparison', answers: ['Addition', 'Subtraction', 'Comparison', 'Multiplication'], correctIndex: 2 },
  { question: 'bié adv. don’t', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 1 },
  { question: 'cháng adj. ', answers: ['Short', 'Medium', 'Long', 'Very Long'], correctIndex: 2 },
  { question: 'chànggē v.', answers: ['Speak', 'Dance', 'Sing', 'Play'], correctIndex: 2 },
  { question: 'chū v. ', answers: ['Enter', 'Exit; go out', 'Stay', 'Move'], correctIndex: 1 },
  { question: 'chuān v. ', answers: ['Remove', 'Wear; put on', 'Hold', 'Drop'], correctIndex: 1 },
  { question: 'cì nm./vm. number of times', answers: ['Once', 'Twice', 'Thrice', 'Four Times'], correctIndex: 2 },
  { question: 'cóng prep. ', answers: ['To', 'from; since', 'Between', 'Among'], correctIndex: 1 },
  { question: 'cuò adj. ', answers: ['Correct', 'Incorrect', 'Right', 'Left'], correctIndex: 1 },
  { question: 'dǎ lánqiú ', answers: ['Play Soccer', 'Play Basketball', 'Swim', 'Run'], correctIndex: 1 },
  { question: 'dàjiā pron.', answers: ['Some', 'None', 'everyone; everybody', 'Few'], correctIndex: 2 },
  { question: 'dào v.', answers: ['Depart', 'arrive; reach', 'Travel', 'Stop'], correctIndex: 1 },
  { question: 'de sa. marker of complement', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 0 },
  { question: 'děng v.', answers: ['Wait', 'Leave', 'Stay', 'Hurry'], correctIndex: 0 },
  { question: 'dìdi n.', answers: ['Older Brother', 'Younger Brother', 'Sister', 'Cousin'], correctIndex: 1 },
  { question: 'dì-yī num.', answers: ['First', 'Second', 'Third', 'Fourth'], correctIndex: 0 },
  { question: 'dǒng v. ', answers: ['Understand', 'Confuse', 'Misunderstand', 'Ignore'], correctIndex: 0 },
  { question: 'duì adj. ', answers: ['Right', 'Wrong', 'Correct', 'Incorrect'], correctIndex: 2 },
  { question: 'duì prep. ', answers: ['To', 'From', 'to; towards', 'Away'], correctIndex: 2 },
  { question: 'fángjiān n. ', answers: ['Living Room', 'Bedroom', 'Kitchen', 'Room'], correctIndex: 3 },
  { question: 'fēicháng adv.', answers: ['Not Very', 'Somewhat', 'Very', 'Extremely'], correctIndex: 2 },
  { question: 'fúwùyuán n. ', answers: ['Customer', 'waiter; waitress', 'Manager', 'Owner'], correctIndex: 1 },
  { question: 'gāo adj.', answers: ['Short', 'Average', 'tall; high', 'Very Tall'], correctIndex: 2 },
  { question: 'gàosu v.', answers: ['Ask', 'Tell', 'Answer', 'Ignore'], correctIndex: 1 },
  { question: 'gēge n.', answers: ['Elder Sister', 'Younger Sister', 'Elder Brother', 'Younger Brother'], correctIndex: 2 },
  { question: 'gěi v. ', answers: ['Take', 'Give, hand over', 'Receive', 'Reject'], correctIndex: 1 },
  { question: 'gōnggòngqìchē n.', answers: ['Car', 'Bus', 'Bicycle', 'Train'], correctIndex: 1 },
  { question: 'gōngsī n.', answers: ['School', 'company; firm', 'Hospital', 'Factory'], correctIndex: 1 },
  { question: 'gǒu n. ', answers: ['Cat', 'Dog', 'Bird', 'Fish'], correctIndex: 1 },
  { question: 'guì adj.', answers: ['Cheap', 'Affordable', 'expensive; costly', 'Luxurious'], correctIndex: 2 },
  { question: 'guo sa. used after a verb, referring to sth. that happened previously', answers: ['Now', 'Before', 'After', 'During'], correctIndex: 1 },
  { question: 'hái adv.', answers: ['Already', 'Not Yet', 'still; yet', 'Finished'], correctIndex: 2 },
  { question: 'háizi n.', answers: ['Son', 'Daughter', 'Child, son or daughter', 'Sibling'], correctIndex: 2 },
  { question: 'hǎochī ', answers: ['Delicious', 'Tasty', 'Bland', 'Spicy'], correctIndex: 0 },
  { question: 'hēi adj.', answers: ['White', 'black; dark', 'Gray', 'Dark'], correctIndex: 1 },
  { question: 'hóng adj. ', answers: ['Blue', 'Green', 'Yellow', 'Red'], correctIndex: 3 },
  { question: 'huānyíng v.', answers: ['Welcome', 'Goodbye', 'Hello', 'Farewell'], correctIndex: 0 },
  { question: 'huídá v.', answers: ['Ask', 'Ignore', 'Respond', 'Answer'], correctIndex: 3 },
  { question: 'huǒchēzhàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 0 },
  { question: 'jīchǎng', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 1 },
  { question: 'jīdàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 2 },
  { question: 'jiàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 3 },
  { question: 'jiàoshì', answers: ['Classroom', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'jiějie', answers: ['Elder Sister', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'jièshào', answers: ['Introduce sb. or sth.', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'jìn', answers: ['Enter', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'jìn', answers: ['Close; Near', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'jiù', answers: ['Indicating certainty; right on', 'Immediately; right now; right away', 'Railway station', 'Airport'], correctIndex: 1 },
  { question: 'juéde', answers: ['Feel; Think', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'kāfēi', answers: ['Coffee', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'kāishǐ', answers: ['Start; Begin', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'kǎoshì', answers: ['Examination / Take a test', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'kěnéng', answers: ['May; Can', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'kěyǐ', answers: ['Can; May', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'kè', answers: ['Lesson; Class', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'kuài', answers: ['Fast; Be going to; Will; Shall', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'kuàilè', answers: ['Happy; Joyful; Cheerful; Glad', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'lèi', answers: ['Tired; Fatigued', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'lí', answers: ['Away from', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'liǎng', answers: ['Two', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: 'lù', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 2 },
  { question: 'lǚyóu', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 1 },
  { question: 'mài', answers: ['Travel', 'Road', 'Slow', 'Sell'], correctIndex: 3 },
  { question: 'màn', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 2 },
  { question: 'máng', answers: ['Sell', 'Travel', 'Road', 'Slow'], correctIndex: 3 },
  { question: 'māo', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 2 },
  { question: 'měi', answers: ['Sell', 'Road', 'Slow', 'Travel'], correctIndex: 1 },
  { question: 'mèimei', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 3 },
  { question: 'mén', answers: ['Sell', 'Slow', 'Road', 'Travel'], correctIndex: 2 },
  { question: 'nán', answers: ['Travel', 'Road', 'Sell', 'Slow'], correctIndex: 1 },
  { question: 'nín', answers: ['Road', 'Slow', 'Sell', 'Travel'], correctIndex: 3 },
  { question: 'niúnǎi', answers: ['Slow', 'Travel', 'Road', 'Sell'], correctIndex: 1 },
  { question: 'nǚ', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 0 },
  { question: 'pángbiān', answers: ['Road', 'Sell', 'Slow', 'Travel'], correctIndex: 1 },
  { question: 'pǎobù', answers: ['Slow', 'Travel', 'Road', 'Sell'], correctIndex: 2 },
  { question: 'piányi', answers: ['Travel', 'Sell', 'Road', 'Slow'], correctIndex: 3 },
  { question: 'piào', answers: ['Slow', 'Road', 'Sell', 'Travel'], correctIndex: 2 },
  { question: 'qīzi', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 1 },
  { question: 'qǐchuáng', answers: ['Travel', 'Slow', 'Sell', 'Road'], correctIndex: 0 },
  { question: 'qiān', answers: ['Road', 'Travel', 'Slow', 'Sell'], correctIndex: 3 },
  { question: 'qiānbǐ', answers: ['Slow', 'Travel', 'Road', 'Sell'], correctIndex: 2 },
  { question: 'qíng', answers: ['Road', 'Travel', 'Slow', 'Sell'], correctIndex: 1 },
  { question: 'qùnián', answers: ['Road', 'Slow', 'Sell', 'Travel'], correctIndex: 2 },
  { question: 'ràng', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 1 },
  { question: 'rì', answers: ['Road', 'Travel', 'Slow', 'Sell'], correctIndex: 2 },
  { question: 'shàngbān', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 0 },
  { question: 'shēntǐ', answers: ['Slow', 'Road', 'Travel', 'Sell'], correctIndex: 2 },
  { question: 'shēngbìng', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 1 },
  { question: 'shēngrì', answers: ['Matter; Business; Circumstance; Event; Affair; Incident; Occurrence', 'Birthday', 'Wrist Watch; Watch', 'Time'], correctIndex: 1 },
  { question: 'shíjiān', answers: ['Wash', 'Hour', 'Time', 'Laugh; Smile'], correctIndex: 2 },
  { question: 'shìqing', answers: ['Why', 'Dance', 'Play Soccer', 'Matter; Business; Circumstance; Event; Affair; Incident; Occurrence'], correctIndex: 3 },
  { question: 'shǒubiǎo', answers: ['Dance', 'Wrist Watch; Watch', 'Why', 'Play Soccer'], correctIndex: 1 },
  { question: 'shǒujī', answers: ['Hope; Wish; Want; Be Desirous Of', 'Mobile Phone', 'Wrist Watch; Watch', 'New; Up-to-date'], correctIndex: 2 },
  { question: 'sòng', answers: ['Wrist Watch; Watch', 'Play', 'Give sb. sth. as a Gift', 'Swim'], correctIndex: 2 },
  { question: 'suīrán…dànshì…', answers: ['Play Soccer', 'Though; But; However', 'Why', 'Wrist Watch; Watch'], correctIndex: 1 },
  { question: 'tā', answers: ['Mobile Phone', 'Why', 'It; Its', 'Matter; Business; Circumstance; Event; Affair; Incident; Occurrence'], correctIndex: 2 },
  { question: 'tī zúqiú', answers: ['Laugh; Smile', 'Play Soccer', 'Questions, Problems (in a Test or a Quiz)', 'Wash'], correctIndex: 1 },
  { question: 'tí', answers: ['Play Soccer', 'Dance', 'Wash', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 3 },
  { question: 'tiàowǔ', answers: ['Dance', 'Hour', 'Wrist Watch; Watch', 'Wash'], correctIndex: 0 },
  { question: 'wài', answers: ['Wash', 'Wrist Watch; Watch', 'Outer; Outside', 'Why'], correctIndex: 2 },
  { question: 'wán', answers: ['Wrist Watch; Watch', 'Questions, Problems (in a Test or a Quiz)', 'Play', 'Why'], correctIndex: 2 },
  { question: 'wán', answers: ['Play Soccer', 'Wrist Watch; Watch', 'Play', 'Wash'], correctIndex: 2 },
  { question: 'wǎnshang', answers: ['Wrist Watch; Watch', 'Evening', 'Wash', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 1 },
  { question: 'wèi shénme', answers: ['Hour', 'Why', 'Wrist Watch; Watch', 'Wash'], correctIndex: 3 },
  { question: 'wèn', answers: ['Dance', 'Wrist Watch; Watch', 'Wash', 'Ask; Inquire After'], correctIndex: 3 },
  { question: 'wèntí', answers: ['Questions, Problems (in a Test or a Quiz)', 'Wrist Watch; Watch', 'Wash', 'Dance'], correctIndex: 0 },
  { question: 'xīguā', answers: ['Wrist Watch; Watch', 'Wash', 'Watermelon', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 2 },
  { question: 'xīwàng', answers: ['Wrist Watch; Watch', 'Wash', 'Hope; Wish; Want; Be Desirous Of', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 2 },
  { question: 'xǐ', answers: ['Play', 'Questions, Problems (in a Test or a Quiz)', 'Wrist Watch; Watch', 'Wash'], correctIndex: 3 },
  { question: 'xiǎoshí', answers: ['Why', 'Hour', 'Wrist Watch; Watch', 'Wash'], correctIndex: 1 },
  { question: 'xiào', answers: ['Questions, Problems (in a Test or a Quiz)', 'Wrist Watch; Watch', 'Hour', 'Wash'], correctIndex: 3 },
  { question: 'xīn', answers: ['Wrist Watch; Watch', 'New; Up-to-date', 'Wash', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 1 },
  { question: 'xìng', answers: ['Matter; Business; Circumstance; Event; Affair; Incident; Occurrence', 'Take … As Surname', 'Wash', 'Play Soccer'], correctIndex: 0 },
  { question: 'xiūxi', answers: ['Wrist Watch; Watch', 'Wash', 'Relax; Have a Rest; Take a Break', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 2 },
  { question: 'xuě', answers: ['Matter; Business; Circumstance; Event; Affair; Incident; Occurrence', 'Snow', 'Wrist Watch; Watch', 'Wash'], correctIndex: 1 },
  { question: 'yánsè', answers: ['Wrist Watch; Watch', 'Wash', 'Color', 'Play Soccer'], correctIndex: 2 },
  { question: 'yǎnjing', answers: ['Wash', 'Wrist Watch; Watch', 'Eye', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 2 },
  { question: 'yángròu', answers: ['Watermelon', 'Wash', 'Mutton', 'Wrist Watch; Watch'], correctIndex: 3 },
  { question: 'yào', answers: ['Hour', 'Hope; Want; Wish; Be Desirous Of', 'Medicine', 'Wrist Watch; Watch'], correctIndex: 2 },
  { question: 'yě', answers: ['Wrist Watch; Watch', 'Wash', 'Also; Too; As Well; Either', 'Hope; Wish; Want; Be Desirous Of'], correctIndex: 2 },
  { question: 'yíxià', answers: ['Wrist Watch; Watch', 'Wash', 'Once; In a Short While', 'Hope; Wish; Want; Be Desirous Of'], correctIndex: 2 },
  { question: 'yìqǐ', answers: ['Wrist Watch; Watch', 'Wash', 'Together', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yǐjīng', answers: ['Wrist Watch; Watch', 'Wash', 'Already; Yet', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yìsi', answers: ['Wrist Watch; Watch', 'Wash', 'Meaning', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yīnwèi…suǒyǐ…', answers: ['Wrist Watch; Watch', 'Wash', 'On Account Of; Because Of', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yīn', answers: ['Wrist Watch; Watch', 'Wash', 'Cloudy; Overcast', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yóuyǒng', answers: ['Wrist Watch; Watch', 'Wash', 'Swim', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yòubian', answers: ['Wrist Watch; Watch', 'Wash', 'Right; Right Side', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yú', answers: ['Wash', 'Wrist Watch; Watch', 'Fish', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yuǎn', answers: ['Wrist Watch; Watch', 'Wash', 'Far', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yùndòng', answers: ['Take Exercise'], correctIndex: 0 },
  { question: 'zài', answers: ['Again', 'More; Further'], correctIndex: 0 },
  { question: 'zǎoshang', answers: ['Morning'], correctIndex: 0 },
  { question: 'zhàngfu', answers: ['Husband'], correctIndex: 0 },
  { question: 'zhǎo', answers: ['Seek; Look For'], correctIndex: 0 },
  { question: 'zhe', answers: ['Used After a Verb, Indicating That the Action Starts and Continues'], correctIndex: 0 },
  { question: 'zhēn', answers: ['Indeed; Really'], correctIndex: 0 },
  { question: 'zhèngzài', answers: ['Be + Verb + Ing; In the Process Of; In the Course Of; In the Middle Of; In the Act Of'], correctIndex: 0 },
  { question: 'zhīdào', answers: ['Know; Be Aware Of'], correctIndex: 0 },
  { question: 'zhǔnbèi', answers: ['Be Going To; Intend; Plan; Prepare'], correctIndex: 0 },
  { question: 'zìxíngchē', answers: ['Bicycle'], correctIndex: 0 },
  { question: 'zǒu', answers: ['Walk; Go on Foot', 'Leave; Go Away; Depart'], correctIndex: 0 },
  { question: 'zuì', answers: ['The Most'], correctIndex: 0 },
  { question: 'zuǒbian', answers: ['Left; Left Side'], correctIndex: 0 }


 


    
  // Add more questions as needed
];

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  const questionText = document.getElementById('question');
  const answerOptions = document.getElementById('answers');
  const feedback = document.getElementById('feedback');
  const tryAgainButton = document.createElement('button');
  const backButton = document.createElement('button');

  questionText.textContent = question.question;
  answerOptions.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index));
    answerOptions.appendChild(button);
  });

  feedback.textContent = '';
  nextButton.style.display = 'none';
  prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
  showResultButton.style.display = 'none';

  tryAgainButton.textContent = 'Try Again';
  tryAgainButton.classList.add('btn');
  tryAgainButton.style.display = 'none';
  tryAgainButton.addEventListener('click', () => {
    feedback.textContent = '';
    tryAgainButton.style.display = 'none';
    backButton.style.display = 'none';
    document.getElementById('question').style.color = '#000'; // Reset question text color
    enableButtons();
  });

  backButton.textContent = 'Back to Previous Question';
  backButton.classList.add('btn');
  backButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
  backButton.addEventListener('click', () => {
    currentQuestionIndex--;
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('question').style.color = '#000'; // Reset question text color
    enableButtons();
  });

  feedback.appendChild(tryAgainButton);
  feedback.appendChild(backButton);
}

function selectAnswer(index) {
  const question = questions[currentQuestionIndex];
  const feedback = document.getElementById('feedback');

  if (index === question.correctIndex) {
    score++;
    feedback.textContent = 'Correct!';
    feedback.style.color = '#3498db'; // Blue color for correct answer
    nextButton.style.display = 'block';
    prevButton.style.display = 'none';
    showResultButton.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
  } else {
    feedback.textContent = 'Incorrect. Try again.';
    feedback.style.color = '#e74c3c'; // Red color for incorrect answer
    document.getElementById('question').style.color = '#e74c3c';
    disableButtons();
    document.getElementById('feedback').getElementsByTagName('button')[0].style.display = 'block'; // Show try again button
    document.getElementById('feedback').getElementsByTagName('button')[1].style.display = 'block'; // Show back button
    nextButton.style.display = 'none';
    showResultButton.style.display = 'none';
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.disabled = false;
  });
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('question').style.color = '#000'; // Reset question text color
    enableButtons();
    prevButton.style.display = 'block';
    showResultButton.style.display = 'none';
  } else {
    showResult();
  }
}

function prevQuestion() {
  currentQuestionIndex--;

  if (currentQuestionIndex >= 0) {
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('question').style.color = '#000'; // Reset question text color
    enableButtons();
    prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    showResultButton.style.display = 'none';
  } else {
    currentQuestionIndex = 0;
  }
}

function showResult() {
  const answerOptions = document.getElementById('answers');
  answerOptions.innerHTML = `Your score: ${score}/${questions.length}`;
  nextButton.style.display = 'none';
  prevButton.style.display = 'none';
  showResultButton.style.display = 'none';
}

startQuiz();
