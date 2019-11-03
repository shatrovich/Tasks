module Main where

-- import Lib

createPitch :: Integer -> [[Integer]]

_createPitch ::Integer -> [[Integer]] -> Integer -> [[Integer]]

_createPitch b a 0 = a

_createPitch b a x = do
    _createPitch b (a ++ [[0..b]]) (x - 1)

createPitch 0 = error "x must be greather 0"

createPitch x = do
    _createPitch x ([[0..x]]) (x - 1)

main :: IO ()
main = do
    let p = createPitch 1000

    print ( p )
