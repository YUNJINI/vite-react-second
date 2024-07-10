export default function Avatar(person, size=200) {
    return(
        <img 
            className="avatar"
            src={person.imageUrl}
            alt={person.name} 
            width={size}
            height={size}
        />
    );
}

// // 또다른 경우. 이름이 같았을때 펼침연산자 사용
// function Profile({ person, size, isSepia, thickBorder }) {
//     return (
//         <div className="card">
//             <Avatar
//                 person={person}
//                 size={size}
//                 isSepia={isSepia}
//                 thickBorder={thickBorder}
//             />
//         </div>
//     );
// }
// // =>
// function Profile(props) {
//     return (
//         <div className="card">
//             <Avatar {...props} />
//         </div>
//     );
// }