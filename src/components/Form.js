import './Form.css';

export default function Form({ addItem }) {

    function handleSubmit(event) { 
        event.preventDefault();
        const body = event.target.item.value;
        event.target.item.value = ''; 
        addItem(body);
    }

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><input type="text" placeholder="add items to be added..." name="item" /></td>
                        <td><input type="submit" value="Add Item"/></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};