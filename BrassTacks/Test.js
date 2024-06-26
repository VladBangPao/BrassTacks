import { BrassTacks } from "./BrassTacks.js"
import * as assert from "node:assert"
class Test{
    constructor(){
        this.tests()
    }

    tests(){
        // this.isOverLimit()
        // this.isRecursive()
        // this.primPattAbstract()
        // this.isBinaryBaseString()
        // this.BinaryStringTree()
        this.PallindromeSet()
    }

    isOverLimit(){
        console.log('isOVERLIMIT')
        var levels=5;
        var limit=2;
        var bt = new BrassTacks(levels, limit)
        assert.equal(bt.isOverLimit('000'), true)
        assert.equal(bt.isOverLimit('111'), true)
        assert.equal(bt.isOverLimit('11'), false)
        assert.equal(bt.isOverLimit('00'), false)
        assert.equal(bt.isOverLimit('10'), false)
        assert.equal(bt.isOverLimit('01'), false)
        limit=5
        var bt = new BrassTacks(levels, limit)
        assert.equal(bt.isOverLimit('000000'), true)
        assert.equal(bt.isOverLimit('111111'), true)
        assert.equal(bt.isOverLimit('1'), false)
        assert.equal(bt.isOverLimit('11'), false)
        assert.equal(bt.isOverLimit('111'), false)
        assert.equal(bt.isOverLimit('1111'), false)
        assert.equal(bt.isOverLimit('11111'), false)
        assert.equal(bt.isOverLimit('0'), false)
        assert.equal(bt.isOverLimit('00'), false)
        assert.equal(bt.isOverLimit('000'), false)
        assert.equal(bt.isOverLimit('0000'), false)
        assert.equal(bt.isOverLimit('00000'), false)
        assert.equal(bt.isOverLimit('0'), false)
        assert.equal(bt.isOverLimit('01'), false)
        assert.equal(bt.isOverLimit('010'), false)
        assert.equal(bt.isOverLimit('0101'), false)
        assert.equal(bt.isOverLimit('01010'), false)
        assert.equal(bt.isOverLimit('1'), false)
        assert.equal(bt.isOverLimit('10'), false)
        assert.equal(bt.isOverLimit('101'), false)
        assert.equal(bt.isOverLimit('1010'), false)
        assert.equal(bt.isOverLimit('10101'), false)
    }

    isRecursive(){
        console.log('isRECURSIVE')

        var bt = new BrassTacks(0, 0)
        var recursiveStrings=[]
        for(var _1s=1; _1s<100; _1s++){
            for(var _0s=1; _0s<100; _0s++){
                for(var _r=2; _r<100; _r++){
                    assert.equal(true, bt.isRecursive(("1".repeat(_1s)+"0".repeat(_1s)).repeat(_r)))
                }
            }
        }
    }

    primPattAbstract(){
        console.log('PRIMPATTABSTRACT')

    }

    isBinaryBaseString(){
        var bt = new BrassTacks(5, 100)
        var recursiveStrings=[]
        for(var _1s=1; _1s<100; _1s++){
            for(var _0s=1; _0s<100; _0s++){
                for(var _r=2; _r<100; _r++){
                    assert.equal(true, bt.isBinaryBaseString("1"+"0".repeat(_0s)+"1".repeat(_1s)))
                }
            }
        }
    }

    BinaryStringTree(){
        //when we construct a brasstacks object
        //all the bStrings should be able to completely walk through the tree perfectly
        var levels=10;
        var limit=2;
        var bt = new BrassTacks(levels, limit)
        for(var i = 0; i<bt.binaryStrings.length; i++){
            assert.equal(true, bt.BinaryStringWalk(bt.binaryStrings[i]))
        }
    }

    PallindromeSet(){
        var alphabet=['abcdefghijklmnopqrstuvwxyz']
        var bt = new BrassTacks(0,0)
        bt.PallindromeSet(alphabet)
    }
}
//console.log("UHHH")


new Test()