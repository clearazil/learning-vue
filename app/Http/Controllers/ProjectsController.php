<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Exception;

class ProjectsController extends Controller
{

    /**
     * Display a listing of the projects.
     *
     * @return Illuminate\View\View
     */
    public function index()
    {
        $projects = Project::paginate(25);

        return view('projects.index', compact('projects'));
    }

    /**
     * Show the form for creating a new project.
     *
     * @return Illuminate\View\View
     */
    public function create()
    {
        return view('projects.create');
    }

    /**
     * Store a new project in the storage.
     *
     * @param Illuminate\Http\Request $request
     *
     * @return Illuminate\Http\RedirectResponse | Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        $data = $this->getData($request);

        Project::create($data);

        return ['message' => 'Project created!'];
    }

    /**
     * Display the specified project.
     *
     * @param int $id
     *
     * @return Illuminate\View\View
     */
    public function show($id)
    {
        $project = Project::findOrFail($id);

        return view('projects.show', compact('project'));
    }

    /**
     * Show the form for editing the specified project.
     *
     * @param int $id
     *
     * @return Illuminate\View\View
     */
    public function edit($id)
    {
        $project = Project::findOrFail($id);

        return view('projects.edit', compact('project'));
    }

    /**
     * Update the specified project in the storage.
     *
     * @param int $id
     * @param Illuminate\Http\Request $request
     *
     * @return Illuminate\Http\RedirectResponse | Illuminate\Routing\Redirector
     */
    public function update($id, Request $request)
    {
        try {
            $data = $this->getData($request);

            $project = Project::findOrFail($id);
            $project->update($data);

            return redirect()->route('projects.project.index')
                ->with('success_message', 'Project was successfully updated.');
        } catch (Exception $exception) {
            return back()->withInput()
                ->withErrors(['unexpected_error' => 'Unexpected error occurred while trying to process your request.']);
        }
    }

    /**
     * Remove the specified project from the storage.
     *
     * @param int $id
     *
     * @return Illuminate\Http\RedirectResponse | Illuminate\Routing\Redirector
     */
    public function destroy($id)
    {
        try {
            $project = Project::findOrFail($id);
            $project->delete();

            return redirect()->route('projects.project.index')
                ->with('success_message', 'Project was successfully deleted.');
        } catch (Exception $exception) {
            return back()->withInput()
                ->withErrors(['unexpected_error' => 'Unexpected error occurred while trying to process your request.']);
        }
    }


    /**
     * Get the request's data from the request.
     *
     * @param Illuminate\Http\Request\Request $request
     * @return array
     */
    protected function getData(Request $request)
    {
        $rules = [
            'name' => 'required|string|min:1|max:255',
            'description' => 'required|string|min:1|max:1000',
        ];

        $data = $request->validate($rules);

        return $data;
    }
}
