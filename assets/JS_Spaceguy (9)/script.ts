class SpaceguyBehavior extends Sup.Behavior {
  walkingSpeed: number = 0.01;
  climbingSpeed: number = 0.05;
  jumpForce: number = 0.1;
  maxJumpPressingTime: number = 1000;
  
  jumpPressingTime: number = this.maxJumpPressingTime;
  jumping: boolean = false;
  
  awake() {
    
  }

  update() {
    if (Sup.Input.isKeyDown("A")) this.actor.move(-this.walkingSpeed, 0, 0);
    if (Sup.Input.isKeyDown("D")) this.actor.move(this.walkingSpeed, 0, 0);
  }
}
Sup.registerBehavior(SpaceguyBehavior);
