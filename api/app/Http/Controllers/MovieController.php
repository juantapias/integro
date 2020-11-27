<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use function GuzzleHttp\Promise\all;

class MovieController extends Controller
{
    //
    function index()
    {
        $movies = Movie::all();
        return response()->json($movies);
    }

    function create(Request $request)
    {
        $movie = new Movie;
        $movie->title = $request->title;
        $movie->description = $request->description;
        $movie->year = $request->year;
        $result = $movie->save();
        if ($result) {
            return response()->json(["success" => "data has beed saved"], 200);
        } else {
            return response()->json(["error" => "error request"], 401);
        }
    }

    function single(Request $request)
    {
        $movie = Movie::find($request->id);
        return response()->json($movie);
    }

    function update(Request $request)
    {
        $movie = Movie::find($request->id);
        $movie->title = $request->title;
        $movie->description = $request->description;
        $movie->year = $request->year;
        $result = $movie->save();
        if ($result) {
            return response()->json(["success" => "data has beed updated"], 200);
        } else {
            return response()->json(["error" => "error request"], 401);
        }
    }

    function delete($id)
    {
        $movie = Movie::find($id);
        $result = $movie->delete();
        if ($result) {
            return response()->json(["success" => "data has beed deleted"], 200);
        } else {
            return response()->json(["error" => "error request"], 401);
        }
    }
}
