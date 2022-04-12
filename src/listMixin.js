export default {
    data() {
        return {
            months: [
                { name: 'Январь' },
                { name: 'Февраль' },
                { name: 'Март' },
                { name: 'Апрель' },
                { name: 'Май' },
                { name: 'Июнь' },
                { name: 'Июль' },
                { name: 'Август' },
                { name: 'Сентябрь' },
                { name: 'Октябрь' },
                { name: 'Ноябрь' },
                { name: 'Декабрь' },
            ],
            searchStr: '',
        }
    },
    computed: {
        monthFilter() {
            return this.searchStr === "" ?
                this.months :
                this.months.filter(item => !item.name.toLowerCase().indexOf(this.searchStr.toLowerCase()));
        }
    }
}