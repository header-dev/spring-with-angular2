package com.headerdev.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.headerdev.backend.dao.CommentDao;
import com.headerdev.backend.model.Comment;
import com.headerdev.backend.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentDao commentDao;

	@Override
	public Comment save(Comment comment) {
		return commentDao.save(comment);
	}

	@Override
	public Comment findOne(Long commentId) {
		return commentDao.findOne(commentId);
	}

	@Override
	public List<Comment> findByPhotoId(Long photo) {
		return commentDao.findByPhotoId(photo);
	}

}
