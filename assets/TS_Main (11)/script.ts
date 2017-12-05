Sup.ArcadePhysics2D.setGravity(0, -0.02)

Sup.loadScene("SC_Main")

const spaceGuy = Sup.getActor("A_Spaceguy")
const ground = Sup.getActor("A_Ground")

const ladders = Sup.ArcadePhysics2D.getAllBodies()

ladders[0].

// Save character position on exit
Sup.Input.on("exit", () =>
{
      Sup.Storage.setJSON("position", { x: spaceGuy.getX(), y: spaceGuy.getY() })
})


// Restore saved character position on load
const savedPosition = Sup.Storage.getJSON("position", { x: 0, y: 0 })
spaceGuy.setPosition(savedPosition.x, savedPosition.y, 0)
