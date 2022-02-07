
//noeud
class Node {
    constructor(a)
    {
        this.a = a;
        this.next = null;
    }
}
//linkedlist
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
}
//ajoute un élément à la fin de la liste.
function ajouter(a)
{
    //creer  un noeud
    var node = new Node(a);
   // pour stocker le noeud courant
    var noeud_courant;
 
   // si la liste est vide ajouter lélément et fait dans la tête
    if (this.head == null)
        this.head = node;
    else {
        noeud_courant = this.head;
 
     // itération jusqu'à la fin du liste
        while (noeud_courant.next) {
            noeud_courant = noeud_courant.next;
        }
 
        // add node
        noeud_courant.next = node;
    }
    this.size++;
}