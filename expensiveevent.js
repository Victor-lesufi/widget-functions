document.addEventListener('alpine:init', () => {
    Alpine.data('expensiveItemWidget', function () {
        return {
            itemList: {},
            expensiveItemMessage: '',
            calculate() {
                const message = findItemsOver20(this.itemList);
                this.expensiveItemMessage = message;
            }
        }
    });
})


document.addEventListener('alpine:init', () => {
    Alpine.data('expensiveItemsWidget', function () {
        return {
            itemsList: {},
            thresholdAmount: '0.00',
            expensiveItemsMessage: '',
            calculate() {
                const message = findItemsOver(this.itemsList, this.thresholdAmount);
                this.expensiveItemsMessage = message;
            }
        }
    });
})