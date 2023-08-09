<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventWrapperResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this[0]->id,
            'name' => $this[0]->event_name,
            'description' => $this[0]->event_description,
            'theme_color' => $this[0]->event_theme_color,
            'background_color' => $this[0]->background_color,
            'text_color' => $this[0]->text_color,
            'registers_guests' =>$this[0]->registers_guests,
            'template_id' =>$this[0]->template_id,
            'slug' => $this[0]->slug,
            'primary_typeface' => $this[0]->primary_typeface,
            'secondary_typeface' => $this[0]->secondary_typeface,
            'date' => $this[0]->event_date,
            'created' => $this[0]->created_at,
            'updated' => $this[0]->updated_at,
            'line_ups' => LineUpResource::collection($this[0]->lineups),
            'organizer' => new OrganizerResource(($this[1]))
        ];
    }
}
