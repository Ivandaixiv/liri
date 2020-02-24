import { Mongo } from "meteor/mongo";

export const Pets = new Mongo.Collection("pets");

if (Meteor.isServer) {
  Meteor.publish("pets", function petsPublication() {
    return Pets.find({ ownerId: this.userId });
  });
}
Meteor.methods({
  // This method will only be called when the user accounts gets created to initialize their pet
  "pets.addPet"() {
    if (!this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "pets.addPet.not-authorized",
        "You are not allowed to add pets for other users."
      );
    }
    Pets.insert({
      name: "Your Liri",
      hp: 100,
      level: 1,
      exp: 1,
      species: "white",
      ownerId: this.userId,
      deathCounter: 0,
      stage: "egg"
    });
  },
  "pets.updatePet"(pet, name, species) {
    if (pet.ownerId !== this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "pets.takeHP.not-authorized",
        "You are not allowed affect this pet."
      );
    }
    Pets.update(pet._id, {
      $set: { name, species }
    });
  },
  "pets.takeHP"(pet) {
    if (pet.ownerId !== this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "pets.takeHP.not-authorized",
        "You are not allowed affect this pet."
      );
    }
    Pets.update(pet._id, {
      $inc: { hp: -10 }
    });
    if (pet.hp <= 10) {
      Pets.update(pet._id, {
        $inc: { deathCounter: 1 },
        $set: { hp: 100 }
      });
    }
  },
  "pets.addCounters"(exp, ownerId) {
    const currentUserXP = Pets.find({ ownerId: ownerId }).fetch()[0].exp;
    const totalExp = currentUserXP + exp;
    console.log("OwnerID: ", ownerId, "Exp:", exp);
    if (totalExp > 99) {
      let remainingExp = totalExp % 100;
      Pets.update(
        { ownerId: ownerId },
        {
          $inc: { level: 1 },
          $set: { exp: 1 + remainingExp, hp: 100 }
        }
      );
    } else {
      Pets.update(
        { ownerId: ownerId },
        {
          $inc: { exp: exp }
        }
      );
    }
  },
  "pets.switchPet"(pet, user, specie) {
    if (user._id !== this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "pets.switchPet.not-authorized",
        "You are not allowed to switch to this pet."
      );
    }
    Pets.update(pet._id, {
      $set: { species: specie }
    });
  },
  "pets.evolve"(ownerId) {
    const currentLevel = Pets.find({ ownerId: ownerId }).fetch()[0].level;
    if (currentLevel >= 5) {
      Pets.update({ ownerId: ownerId }, { $set: { stage: "young" } });
    } else if (currentLevel >= 10) {
      Pets.update({ ownerId: ownerId }, { $set: { stage: "adult" } });
    }
  }
  // "pets.displayLiri"(pet) {
  //   if (task.owner !== this.userId) {
  //     // Checks if the user matches
  //     throw new Meteor.Error(
  //       "pets.displayLiri.not-authorized",
  //       "You are not allowed to display this pet."
  //     );
  //   }
  //   Pets;
  // }
});
