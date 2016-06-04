<?php
namespace Craft;

class Neo_CriteriaModel extends ElementCriteriaModel
{
	private $_allElements;
	private $_currentFilters = [];

	private $_descendant = null;

	public static function convert(ElementCriteriaModel $ecm)
	{
		$attributes = array_filter($ecm->getAttributes(), function($value)
		{
			return (bool) $value;
		});

		return new Neo_CriteriaModel($attributes);
	}

	public function __construct($attributes, $_ = null)
	{
		$elementType = craft()->elements->getElementType(Neo_ElementType::NeoBlock);

		parent::__construct($attributes, $elementType);
	}

	public function copy()
	{
		$copy = parent::copy();

		if(!empty($this->_allElements))
		{
			$copy->setAllElements($this->_allElements);
		}

		return $copy;
	}

	public function setAttribute($name, $value)
	{
		if(parent::setAttribute($name, $value))
		{
			$method = '__' . $name;

			if(craft()->request->isLivePreview() && method_exists($this, $method))
			{
				$this->_currentFilters[$method] = $value;

				$this->_runFilters();
			}

			return true;
		}

		return false;
	}

	public function setAllElements($elements)
	{
		$this->_allElements = $elements;

		$this->_runFilters();
	}

	private function _runFilters()
	{
		if(!empty($this->_allElements))
		{
			$elements = array_filter($this->_allElements, function($element)
			{
				return $this->_elementFilters($element);
			});

			$this->setMatchedElements($elements);
		}
	}

	private function _elementFilters($element)
	{
		foreach($this->_currentFilters as $method => $value)
		{
			if(!$this->$method($element, $value))
			{
				return false;
			}
		}

		return true;
	}

	/*
	 * Filtering methods
	 */

	protected function __ancestorDist($element, $value)
	{
		return true; // TODO
	}

	protected function __ancestorOf($element, $value)
	{
		return true; // TODO
	}

	protected function __archived($element, $value)
	{
		return true; // TODO
	}

	protected function __childField($element, $value)
	{
		return true; // TODO
	}

	protected function __childOf($element, $value)
	{
		return true; // TODO
	}

	protected function __collapsed($element, $value)
	{
		return true; // TODO
	}

	protected function __dateCreated($element, $value)
	{
		return true; // TODO
	}

	protected function __dateUpdated($element, $value)
	{
		return true; // TODO
	}

	protected function __depth($element, $value)
	{
		return true; // TODO
	}

	protected function __descendantOf($element, $value)
	{
		$this->_descendant = $value;

		if(!$value)
		{
			return true;
		}

		$elements = $this->_allElements;
		$found = false;

		foreach($elements as $searchElement)
		{
			if($searchElement === $value)
			{
				$found = true;
			}
			else if($found)
			{
				if($searchElement->level > $value->level)
				{
					if($searchElement === $element)
					{
						return true;
					}
				}
				else
				{
					break;
				}
			}
		}

		return false;
	}

	protected function __descendantDist($element, $value)
	{
		if(!$value || !$this->_descendant)
		{
			return true;
		}

		return $element->level <= $this->_descendant->level + $value;
	}

	protected function __fieldId($element, $value)
	{
		return true; // TODO
	}

	protected function __fixedOrder($element, $value)
	{
		return true; // TODO
	}

	protected function __id($element, $value)
	{
		return true; // TODO
	}

	protected function __indexBy($element, $value)
	{
		return true; // TODO
	}

	protected function __level($element, $value)
	{
		if(!$value)
		{
			return true;
		}

		return $element->level == $value;
	}

	protected function __limit($element, $value)
	{
		return true; // TODO
	}

	protected function __locale($element, $value)
	{
		return true; // Just return true because the blocks will already be locale filtered
	}

	protected function __localeEnabled($element, $value)
	{
		return true; // TODO
	}

	protected function __nextSiblingOf($element, $value)
	{
		return true; // TODO
	}

	protected function __offset($element, $value)
	{
		return true; // TODO
	}

	protected function __order($element, $value)
	{
		return true; // TODO
	}

	protected function __ownerId($element, $value)
	{
		return true; // TODO
	}

	protected function __ownerLocale($element, $value)
	{
		return true; // TODO
	}

	protected function __parentField($element, $value)
	{
		return true; // TODO
	}

	protected function __parentOf($element, $value)
	{
		return true; // TODO
	}

	protected function __positionedAfter($element, $value)
	{
		return true; // TODO
	}

	protected function __positionedBefore($element, $value)
	{
		return true; // TODO
	}

	protected function __prevSiblingOf($element, $value)
	{
		return true; // TODO
	}

	protected function __relatedTo($element, $value)
	{
		return true; // TODO
	}

	protected function __ref($element, $value)
	{
		return true; // TODO
	}

	protected function __search($element, $value)
	{
		return true; // TODO
	}

	protected function __siblingOf($element, $value)
	{
		return true; // TODO
	}

	protected function __slug($element, $value)
	{
		return true; // TODO
	}

	protected function __status($element, $value)
	{
		return true; // TODO
	}

	protected function __title($element, $value)
	{
		return true; // TODO
	}

	protected function __type($element, $value)
	{
		return true; // TODO
	}

	protected function __uri($element, $value)
	{
		return true; // TODO
	}

	protected function __with($element, $value)
	{
		return true; // TODO
	}
}