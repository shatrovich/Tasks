module Main where

-- import Lib

data Coordinates = Coordinates {
    x :: Integer,
    y :: Integer
}

calculate :: Integer -> Integer -> Integer -> Integer -> Integer -> Integer -> Integer

calculate m x0 y0 x1 y1 count
    | x0 == x1 && y0 == y1 = 1
    | count == 0 = 0
    | x0 == 1 && y0 == 1 = ( calculate m ( x0 + 1 ) y0 x1 y1 (count - 1) ) + ( calculate m x0 (y0 + 1) x1 y1 (count - 1) )
    | x0 == m && y0 == m = ( calculate m ( x0 - 1 ) y0 x1 y1 (count - 1) ) + ( calculate m x0 (y0 - 1) x1 y1 (count - 1) )
    | x0 == 1 = ( calculate m ( x0 + 1 ) y0 x1 y1 (count - 1) ) + ( calculate m x0 (y0 - 1) x1 y1 (count - 1) ) + ( calculate m x0 (y0 + 1) x1 y1 (count - 1) )
    | y0 == 1 = ( calculate m ( x0 - 1 ) y0 x1 y1 (count - 1) ) + ( calculate m (x0 + 1) y0 x1 y1 (count - 1) ) + ( calculate m x0 (y0 + 1) x1 y1 (count - 1) )
    | x0 == m = ( calculate m ( x0 - 1 ) y0 x1 y1 (count - 1) ) + ( calculate m x0 (y0 - 1) x1 y1 (count - 1) ) + ( calculate m x0 (y0 + 1) x1 y1 (count - 1) )
    | y0 == m = ( calculate m ( x0 - 1 ) y0 x1 y1 (count - 1) ) + ( calculate m (x0 + 1) y0 x1 y1 (count - 1) ) + ( calculate m x0 (y0 - 1) x1 y1 (count - 1) )
    | otherwise = ( calculate m ( x0 + 1 ) y0 x1 y1 (count - 1) ) + ( calculate m (x0 - 1) y0 x1 y1 (count - 1) ) + ( calculate m x0 (y0 - 1) x1 y1 (count - 1) ) + ( calculate m x0 (y0 + 1) x1 y1 (count - 1) )

main :: IO ()
main = do
    print ( calculate 100 1 1 5 5 10 )
    print ( calculate 100 1 1 2 2 4 )
