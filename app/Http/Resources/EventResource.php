<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->event_name,
            'description' => $this->event_description,
            'theme_color' => $this->event_theme_color,
            'background_color' => $this->background_color,
            'text_color' => $this->text_color,
            'slug' => $this->slug,
            'primary_typeface' => $this->primary_typeface,
            'secondary_typeface' => $this->secondary_typeface,
            'date' => $this->event_date,
            'created' => $this->created_at,
            'updated' => $this->updated_at
        ];

    }

}
