namespace SpriteKind {
    export const chest = SpriteKind.create()
    export const portal = SpriteKind.create()
}
function LevelStart () {
    ridder_ofzo = sprites.create(assets.image`back2`, SpriteKind.Player)
    statusbar = statusbars.create(15, 5, StatusBarKind.Health)
    hptext = 3
    controle = 3
    statusbar.attachToSprite(ridder_ofzo)
    statusbar.max = 3
    statusbar.setLabel(convertToText(hptext))
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        portal = sprites.create(img`
            ....c....aaaaaaa...c..c.
            ..c....aaaaaaaaaaaa.....
            .c.c..aaaaaaaaaaaaaa..c.
            ....aaaaaaaa9aaaaaaa....
            ...aaaaaaa98999aaaaa.c.c
            ..aaaaaaa99899999aaaa...
            ..aaaaa9999999999aaaa...
            .aaaaa999999999999aaaa..
            .aaaa9999899999899aaaaa.
            .aaa98999999989999aaaaa.
            .aaa99999999999999aaaaa.
            .aaa99999989998999aaaaa.
            .aaa999999999999999aaaa.
            aaaa999899999999999aaaaa
            .aaa999999999999899aaaa.
            .aaa999999989899999aaaa.
            .aaa9999899999999999aaa.
            .aaa9999999899999999aaaa
            .aaa9899999999999999aaa.
            aaaa9999898999998999aaa.
            .aaa9999999999999989aaa.
            .aaa999999999999999aaaaa
            .aaa998998999989999aaaa.
            .aaa999999998999999aaaa.
            .aaa99999999999989aaaaa.
            .aaaa9999999999999aaaaa.
            .aaaaa999899999899aaaaa.
            .aaaaaa9999999999aaaaaa.
            ..aaaaaa9999999aaaaaaaa.
            ...aaaaaaaa999aaaaaaaa..
            c...aaaaaaaaaaaaaaaa...c
            .cc...aaaaaaaaaaaaa.c...
            `, SpriteKind.portal)
        tiles.placeOnTile(portal, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        enemy_ofz = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(enemy_ofz, value)
        tiles.setTileAt(value, assets.tile`myTile4`)
        animation.runImageAnimation(
        enemy_ofz,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111ffff.....
            ......fffcdb1bc111cf....
            ....fc111cbfbf1b1b1f....
            ....f1b1b1ffffbfbfbf....
            ....fbfbfffffff.........
            .........fffff..........
            ..........fff...........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .....ffff111111bf.......
            ....fc111cdb1bdfff......
            ....f1b1bcbfbfc111cf....
            ....fbfbfbffff1b1b1f....
            .........fffffffbfbf....
            ..........fffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `],
        500,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`food`)) {
        mySprite = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.chest)
        tiles.placeOnTile(mySprite, value)
        tiles.setTileAt(value, assets.tile`food`)
    }
    tiles.placeOnRandomTile(ridder_ofzo, assets.tile`myTile3`)
    scene.cameraFollowSprite(ridder_ofzo)
    tiles.coverAllTiles(assets.tile`food`, assets.tile`myTile6`)
    tiles.coverAllTiles(assets.tile`myTile4`, assets.tile`myTile4`)
    tiles.coverAllTiles(assets.tile`myTile`, assets.tile`myTile3`)
    pause(500)
    music.playMelody("E B C5 A B G A F ", 120)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ridder_ofzo.setImage(assets.image`back3`)
    controller.moveSprite(ridder_ofzo, 50, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . c c c c c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c c b d b c c c . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . c c . . . c c . . . . 
        `, ridder_ofzo, 0, 300)
    controller.moveSprite(projectile, 300, 300)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ridder_ofzo.setImage(assets.image`left`)
    controller.moveSprite(ridder_ofzo, 50, 50)
})
function take_damage () {
    if (controle > 2) {
        statusbar.value += -1
        statusbar.max += -1
        controle += -1
        hptext += -1
        statusbar.setLabel(convertToText(hptext))
    } else {
        statusbar.value += -1
    }
}
function next_level () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level9`)
        LevelStart()
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level3`)
        LevelStart()
    } else if (false) {
    	
    }
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    music.wawawawaa.play()
    game.over(false, effects.dissolve)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ridder_ofzo.setImage(assets.image`right`)
    controller.moveSprite(ridder_ofzo, 50, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.chest, function (sprite, otherSprite) {
    otherSprite.setPosition(otherSprite.x, otherSprite.y)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `],
    350,
    true
    )
    pause(1000)
    eten = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f e f . . . . . . . . . 
        . . . . f e f f f f f . . . . . 
        . . . f f e f 7 7 e 7 f . . . . 
        . . f 5 5 f f 7 7 7 e 7 f . . . 
        . f 5 5 1 1 1 f f 7 7 e f . . . 
        . f 5 1 1 1 1 5 5 f f f f . . . 
        . f 5 1 1 1 5 5 5 5 5 f . . . . 
        . f 5 5 5 5 5 5 5 5 5 f . . . . 
        . f 5 5 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    eten.setPosition(otherSprite.x, otherSprite.y)
    otherSprite.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ridder_ofzo.setImage(assets.image`front`)
    controller.moveSprite(ridder_ofzo, 50, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (statusbar.value < 3) {
        sprite.sayText("nom", 250, false)
        statusbar.value += 1
        otherSprite.destroy()
        statusbar.setLabel(convertToText(hptext))
    } else if (controle <= 5) {
        sprite.sayText("nom", 250, false)
        statusbar.max += 1
        statusbar.value += 1
        controle += 1
        hptext += 1
        otherSprite.destroy()
        statusbar.setLabel(convertToText(hptext))
    } else {
        sprite.sayText("I'm full")
        otherSprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.setScore(info.score() + 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    take_damage()
    pause(500)
})
let eten: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
let enemy_ofz: Sprite = null
let portal: Sprite = null
let controle = 0
let hptext = 0
let statusbar: StatusBarSprite = null
let ridder_ofzo: Sprite = null
let level = 0
scene.setBackgroundImage(assets.image`back`)
tiles.setTilemap(tilemap`level1`)
level = 0
LevelStart()
forever(function () {
    if (ridder_ofzo.overlapsWith(portal)) {
        ridder_ofzo.destroy()
        portal.destroy()
        level += 1
        next_level()
    }
})
