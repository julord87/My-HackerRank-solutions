// Merge two sorted linked lists

function mergeLists(head1, head2) {
    if(head1 === null) {
        return head2;
    }
    
    if(head2 === null) {
        return head1;
    }
    
    if(head1.data < head2.data) {
        head1.next = mergeLists(head1.next, head2);
        return head1;
    } else {
        head2.next = mergeLists(head1, head2.next);
        return head2;
    }
};

// Option 2

function mergeLists(head1, head2) {
    let llist = new SinglyLinkedList();

    while(head1) {
        while(head2 && head2.data <= head1.data) {
            llist.insertNode(head2.data);
            head2 = head2.next;
        }
        llist.insertNode(head1.data);
        head1 = head1.next;
    }
    while(head2) {
        llist.insertNode(head2.data);
        head2 = head2.next;
    }
    return llist.head;
}