package com.headerdev.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.headerdev.backend.model.Photo;
import com.headerdev.backend.service.PhotoService;

@RestController
@RequestMapping("/photo")
public class PhotoController {

	@Autowired
	private PhotoService photoService;

	@RequestMapping(value = "/allPhotos")
	public List<Photo> getAlllPhotos() {
		return photoService.findAll();
	}

}
