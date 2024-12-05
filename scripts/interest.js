export class PriorityQueue {
    constructor() {
        this.queue = []
    }

    enqueue(value, priority) {
        const newNode = { value, priority }
        this.queue.push(newNode)
        this.bubbleUp()
    }

    dequeue() {
        if (this.queue.length === 0) return null

        const highestPriority = this.queue[0]
        const last = this.queue.pop()

        if (this.queue.length > 0) {
            this.queue[0] = last
            this.bubbleDown()
        }

        return highestPriority
    }

    peek() {
        return this.queue.length > 0 ? this.queue[0] : null
    }

    bubbleUp() {
        let index = this.queue.length - 1

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.queue[index].priority >= this.queue[parentIndex].priority) break

            // Swap with parent
            [this.queue[index], this.queue[parentIndex]] = [this.queue[parentIndex], this.queue[index]]
            index = parentIndex
        }
    }

    bubbleDown() {
        let index = 0
        const length = this.queue.length

        while (true) {
            const leftChildIndex = 2 * index + 1
            const rightChildIndex = 2 * index + 2
            let swapIndex = null

            // Compare with left child
            if (leftChildIndex < length && this.queue[leftChildIndex].priority < this.queue[index].priority) {
                swapIndex = leftChildIndex
            }

            // Compare with right child
            if (rightChildIndex < length && this.queue[rightChildIndex].priority < (swapIndex === null ? this.queue[index].priority : this.queue[leftChildIndex].priority)) {
                swapIndex = rightChildIndex
            }

            // No swaps needed
            if (swapIndex === null) break

            // Swap with the selected child
            [this.queue[index], this.queue[swapIndex]] = [this.queue[swapIndex], this.queue[index]]
            index = swapIndex
        }
    }

    isEmpty() {
        return this.queue.length === 0
    }
}
