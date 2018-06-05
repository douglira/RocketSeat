const mongoose = require('mongoose');

const PostNotificationSchema = new mongoose.Schema({
  topic: {
    type: String,
    enum: ['like', 'comment'],
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PostNotificationSchema.index({ createdAt: -1 });
PostNotificationSchema.index({ post: -1, user: -1 });
PostNotificationSchema.index({ post: -1 });
PostNotificationSchema.index({ user: -1 });
PostNotificationSchema.index({ state: -1 });

mongoose.model('PostNotification', PostNotificationSchema);
