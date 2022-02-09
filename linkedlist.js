class Node {
    // constructeur
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
  
    //ajouter un element a l fin de liste 
    ajouter(element) {
        // creer nouveau noeud 
        var node = new Node(element);
  
        // pour stocker le nœud actuel
        var noeud_courant;
  
        // si la liste est vide ajouter lélément et faites-en la tête
        if (this.head == null)
            this.head = node;
        else {
            noeud_courant = this.head;
            // itérer jusqu'à la fin du liste
            while (noeud_courant.next) {
                noeud_courant = noeud_courant.next;
            }
  
            // ajouter le noeud 
            noeud_courant.next = node;
        }
        this.size++;
    }
  
    // inserer des element  a un position dans un index
    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log(" enterervalid index.");
        else {
            // creer nouveau noeud 
            var node = new Node(element);
            var courant , prev;
  
            courant = this.head;
  
            // ajouter l'élément à la premier index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                courant = this.head;
                var t = 0;
                // itération sur la liste pour trouver la position à insérer
                while (t < index) {
                    t++;
                    prev = courant;
                    courant = courant.next;
                }
  
                // ajouter un élément
                node.next = courant;
                prev.next = node;
            }
            this.size++;
        }
    }
    // supprime un élément d'emplacement spécifié
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log(" Enter a valid index");
        else {
            var courant, prev, t = 0;
            courant = this.head;
            prev = courant;
  
            // supprimer le pemier element
            if (index === 0) {
                this.head = courant.next;
            } else {
// itération sur la liste jusqu'à la position pour supprimer un élément
                while (t < index) {
                    t++;
                    prev = courant;
                    courant = courant.next;
                }
  
                // supprimer element 
                prev.next = courant.next;
            }
            this.size--;
  
            // return the remove element
            return courant.element;
        }
    }
    // supprime un élément donné de la liste
    removeElement(element) {
        var courant = this.head;
        var prev = null;
       // itération sur la liste
        while (courant != null) {
            // comparant l'élément avec le courant
             // élément s'il est trouvé, supprimez le
             // retourne vrai
            if (courant.element === element) {
                if (prev == null) {
                    this.head = courant.next;
                } else {
                    prev.next = courant.next;
                }
                this.size--;
                return courant.element;
            }
            prev = courant;
            courant = courant.next;
        }
        return -1;
    }
   // trouve l'index de l'élément
    indexOf(element) {
        var compteur = 0;
        var courant = this.head;
        //parcourir la liste
        while (courant != null) {
        // compare chaque élément de la liste avec l'élément donné
            if (courant.element === element)
                return compteur;
            compteur++;
            courant = courant.next;
        }
        // non trouvable
        return -1;
    }
    // vérifie si la liste est vide
    isEmpty() {
        return this.size == 0;
    }
    // donne la taille de la liste
    size_of_list() {
        console.log(this.size);
    }
    // imprime les éléments de la liste
    printList() {
        var courant = this.head;
        var str = "";
        while (courant) {
            str += courant.element + " ";
            courant = courant.next;
        }
        console.log(str);
    }
}
// création d'un objet pour le Classe de liste liée
var list = new LinkedList();
// teste isEmpty sur une liste vide renvoie vrai
console.log(list.isEmpty());
  
// ajouter un element dans une liste 
list.ajouter(10);
  
// afficher 10
list.printList();
  
// returns 1
console.log(list.size_of_list());
  
// ajouter d'autre element 
list.ajouter(20);
list.ajouter(30);
list.ajouter(40);
list.ajouter(50);
// returns 10 20 30 40 50
list.printList();
// imprime 50 de la liste
console.log("l'élément est-il supprimé ?" + list.removeElement(50));
  
// afficher 10 20 30 40
list.printList();
  
// returns 3
console.log("Index of 40 " + list.indexOf(40));
// insère 60 en deuxième position  la list contient 10 20 60 30 40
list.insertAt(60, 2);
  
list.printList();
  
// returns false
console.log("la liste est-elle vide ? " + list.isEmpty());
// supprime le 3ème élément de la liste
console.log(list.removeFrom(3));
// afficher 10 20 60 40
list.printList();
