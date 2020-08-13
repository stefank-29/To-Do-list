import {todo} from './todoInitialLists';
import {todoTaskDOM} from './todoTaskDOM';

const shortcuts = (() => {
    let allTasks = false;

    function _deactiveAllLists() {
        const ul = document.querySelector('#listsList');
        const lists = ul.querySelectorAll('li');
        lists.forEach(list => {
            list.classList.remove('active');
        })
    }
    function _deleteListView() {
        const lists = document.querySelector('#tasks');
        let child = lists.lastChild;
        while(child){
            lists.removeChild(child);
            child = lists.lastChild;
        }
    }
    
    function showAllTasks(type) {
        const lists = todo.getLists();
        allTasks = true;
        _deleteListView();
        if(type === 'today'){
            lists.forEach(list => {
                todoTaskDOM.renderListTasks(undefined, list.getName(), true, 'today');
            });
        }else if(type === '7days'){
            lists.forEach(list => {
                todoTaskDOM.renderListTasks(undefined, list.getName(), true, '7days');
            });
        }else{
            lists.forEach(list => {
                todoTaskDOM.renderListTasks(undefined, list.getName(), true);
            });
        }   
        _deactiveAllLists();
    }

    function todayTasks() {
        showAllTasks('today');
    }


    function next7DaysTasks() {
        showAllTasks('7days');
    }



    function getAllTasks() {
        return allTasks;
    }
    function setAllTasks(bool){
        allTasks = bool;
    }

    return{
        showAllTasks, getAllTasks, setAllTasks, todayTasks, next7DaysTasks,
    }

})();

export {shortcuts};