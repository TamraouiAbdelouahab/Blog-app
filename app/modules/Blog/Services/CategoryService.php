<?php

namespace Modules\Blog\Services;

use Modules\Blog\Models\Category;
use Modules\Core\Services\BaseService;

class CategoryService extends BaseService
{
    public function __construct(Category $category)
    {   
        parent::__construct($category);
    }
}


