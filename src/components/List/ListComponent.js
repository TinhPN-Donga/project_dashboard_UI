

export default function ListComponent(){
    let listNumber = [1, 2, 3, 4];
    const listItems = listNumber.map(v =>
        <li>Value {v}</li>
      );
    return <><ul>
            {listItems}
        </ul></>;
}