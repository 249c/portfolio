const defaultBoards = [
    {   "id": "board-1",
        "title": "Waiting",
        "class": "waiting",
        "item": [
            { "title": "システムを外注するときに読む本" },
            { "title": "システム発注から導入までを成功させる90の鉄則" },
            { "title": "データ分析はじめの一歩" }
        ]
    },
    {   "id": "board-2",
        "title": "In Progress",
        "class": "progress",
        "item": [
            { "title": "図解まるわかりクラウドのしくみ" },
            { "title": "絵で見てわかるITインフラの仕組み" }
        ]
    },
    {   "id": "board-3",
        "title": "Pending",
        "class": "pending",
        "item": [
            { "title": "絵解きネットワーク超入門" },
            { "title": "ネットワークがよくわかる教科書" },
            { "title": "チャットボットの教科書" }
        ]
    },
    {   "id": "board-4",
        "title": "Done",
        "class": "done",
        "item": [
            { "title": "Linuxの教科書" },
            { "title": "SCRUM BOOT CAMP THE BOOK" }
        ]
    }
];

const task = new jKanban({
    element: '.task-board',
    gutter: '15px',
    widthBoard: '250px',
    boards: defaultBoards,
    itemAddOptions: {
        enabled: true,
        content: '+',  
        class: 'kanban-title-button',
        footer: false 
    },
    
    click: (elem) => task.removeElement(elem),  //del
    buttonClick: (elem, id) => addFormElement(id) //add
});

//add tasks
function addFormElement(id) {
    const formItem = document.createElement('form');

    formItem.innerHTML = '<input type="text">';  //create input_form
    task.addForm(id, formItem);  //add to board

    formItem.addEventListener('submit', (e) => {
        e.preventDefault();

        task.addElement(id, {"title": e.target[0].value}); //add a task
        formItem.parentNode.removeChild(formItem); //remove  input_form
    }) 
}
